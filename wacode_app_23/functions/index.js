const functions = require("firebase-functions");
const puppeteer = require("puppeteer");
const cors = require("cors")({origin: true});

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.getNOAAMap = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const puppet = await puppeteer.launch({headless: true});
    const page = await puppet.newPage();
    const {q, feet} = req.body.data;

    functions.logger.info(req.body.data);

    if (!q) {
      res.status(404).send("ERROR: No Query Param Provided");
    }

    if (req.method !== "POST") {
      res.status(400).send("ERROR: Invalid HTTP Method");
    }

    let imgBuf;

    try {
      await page.goto("https://coast.noaa.gov/slr/#/layer/slr/6/-11581024.663779823/5095888.569004184/4/satellite/none/0.8/2050/interHigh/midAccretion");

      functions.logger.info("Navigated to Page Successfully");

      await page.click("#launchApp");

      functions.logger.info("Launched app Successfully");

      await page.waitForSelector("#searchquery");
      await page.type("#searchquery", q);

      functions.logger.info("Searched Successfully");

      // eslint-disable-next-line max-len
      await page.waitForSelector("#search > span > div > div > div:nth-child(1)");
      await page.click("#search > span > div > div > div:nth-child(1)");

      await page.waitForNetworkIdle();

      functions.logger.info("City found successfully");

      await page.waitForSelector("#gaugeSlrSlider");
      // Select the target element and calculate its offset and height
      const elementData = await page.evaluate(() => {
        const element = document.querySelector("#gaugeSlrSlider");
        const rect = element.getBoundingClientRect();
        return {
          x: rect.x + window.scrollX,
          y: rect.y + window.scrollY,
          height: rect.height,
        };
      });

      functions.logger.info(elementData);

      const percentage = 100 - (feet * 10);
      const clickY = elementData.y + (elementData.height * percentage) / 100;

      functions.logger.info(`${percentage} ${elementData.x} ${clickY}`);

      let offset = 0;
      if (feet === 5) {
        offset = 10;
      } else if (feet === 6 || feet === 7 || feet === 8) {
        offset = 15;
      } else if (feet === 9 || feet === 10) {
        offset = 20;
      }

      await page.mouse.click(elementData.x + 10, clickY + offset);

      await page.waitForNetworkIdle();

      functions.logger.info("finished navigating");

      imgBuf = await page.screenshot({type: "png", encoding: "base64"});

      functions.logger.info("Screenshot successful");
    } catch (e) {
      functions.logger.error("ERROR Scraping: " + e);
      res.send(500).send("Internal Server Error");
    }

    await puppet.close();

    functions.logger.info("Closed Browser");

    res.type("image/png").status(200).send({data: imgBuf});
  });
});

exports.convertLargeFile = functions
    .runWith({
      // Ensure the function has enough memory and time
      // to process large files
      timeoutSeconds: 90,
      memory: "2GB",
    })
    .storage.object()
    .onFinalize((object) => {
      // Do some complicated things that take a lot of memory and time
    });
