import React, { useState, useEffect } from "react";
import Menu from "./MainDropMenu";
import Wave from "react-wavify";

const SustainabilityPage = (props) => {
  return (
    <div className="flex flex-col items-center">
      <Menu className="absolute top-5 left-5" />
      <div className="bg-sky-50 w-3/4  rounded-xl mt-14 mb-10">
        <p className="font-bold text-xl underline drop-shadow-lg min-h-[75px]">
          Sustainability Tips
        </p>
        <ul className="list-disc text-left space-y-4">
          <li>
            When possible, walk or ride your bike in order to avoid carbon
            emissions completely. Carpooling and public transportation
            drastically reduce CO2 emissions by spreading them out over many
            riders.
          </li>
          <li>
            High mileage doesn’t always mean low CO2 emissions. All vehicles
            have an estimated miles-per-gallon rating. Electric cars emit no CO2
            if they’re charged with clean electricity. If you don’t charge it
            with your home’s solar panels AND live somewhere like WY, MO, MO,
            WV, or KY you’re BETTER OFF with a hybrid or high-mileage gas/diesel
            car.
          </li>
          <li>
            Turning up your air conditioning by several degrees can reduce your
            energy bill, keeping CO2 out of the air and dollars in your wallet.
            In the winter, putting on a sweater instead of blasting the heat can
            also save a hefty amount of energy. Many appliances consume energy
            even when you’re not using them. This is called “phantom load,” and
            it can cost you $100 or more per year. Prevent it by directly
            unplugging electronics or by plugging items into a surge
            protector/power strip and turning the whole strip off when you leave
            a room.{" "}
          </li>
          <li>
            Significant resources are needed to produce animal products for food
            compared to plant-based foods. Red meat in particular has a very
            high carbon footprint. A vegan meal is orders of magnitude smaller
            in terms of emissions compared to a meat or diary rich meal. While
            this remains a somewhat controversial topic, it is generally
            accepted that meat and dairy consumption needs to decline in order
            to feed both the growing global population as well as reduce global
            emissions.
          </li>
        </ul>
      </div>
      <div className="bg-sky-50 w-3/4 rounded-xl">
        <p className="font-bold text-xl underline drop-shadow-lg min-h-[75px]">
          Sea Level Rise Facts
        </p>
        <ul className="list-disc text-left space-y-4">
          <li>
            If not for surging carbon dioxide in the atmosphere, sea levels
            should have only risen about an inch or two last century, and might
            have even fallen. Instead, thanks to the highest CO2 levels at any
            point in human history, global sea levels rose by 5.5 inches (14 cm)
            between 1900 and 2000. That's the fastest oceanic advance in 27
            centuries, according to a study published in February 2016, and it's
            still speeding up. "The 20th century rise was extraordinary in the
            context of the last three millennia — and the rise over the last two
            decades has been even faster," says lead author Robert Kopp, a
            climate scientist at Rutgers University, in a statement. "Scenarios
            of future rise depend upon our understanding of the response of sea
            level to climate changes," adds co-author Benjamin Horton. "Accurate
            estimates of sea-level variability during the past 3,000 years
            provide a context for such projections."
          </li>
          <li>
            One inch may not sound like much, but it's an extra inch of ocean,
            not water in a rain gauge. Earth's oceans hold about 321 million
            cubic miles of water, and are generally more like a bowl than a
            beaker, with sloping sides. According to NASA, every vertical inch
            of sea-level rise covers 50 to 100 lateral inches (1.3 to 2.5
            meters) of beach.
          </li>
          <li>
            In its September 2019 report, the IPCC raised its upper projection
            for sea levels at the end of this century, warning the ocean could
            rise by 1.1 meters (3.6 feet) before 2100. Some projections go even
            higher — a 2016 study, for example, suggested global sea levels will
            likely rise 0.5 to 1.3 meters (1.6 to 4.3 feet) by the end of this
            century if greenhouse gas emissions aren't rapidly reduced. Even if
            the 2015 Paris Agreement does spur ambitious climate policy, sea
            levels are still projected to rise 20 to 60 cm (7.8 to 23.6 inches)
            by 2100. Taken with the longer-term effects from melting ice sheets
            in Greenland and Antarctica, that means any strategy to endure
            sea-level rise must involve adaptation plans as well as efforts to
            slow the trend.
          </li>
        </ul>
      </div>
      <div className="w-full">
        <Wave
          fill="#89CFF0"
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.2,
            points: 5,
          }}
        />
      </div>
    </div>
  );
};

export default SustainabilityPage;
