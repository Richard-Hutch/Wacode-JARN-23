import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { functions } from "../config/firebase";
import { httpsCallable } from "firebase/functions";
import { useMutation } from "react-query";
import Menu from "./MainDropMenu";
import Wave from "react-wavify";

function LifeStyleForm() {
  const [location, setLocation] = useState("");
  const [milesDriven, setMilesDriven] = useState("");
  const [hoursFlown, setHoursFlown] = useState("");
  const [mpg, setMPG] = useState("");
  const [electricity, setElecticity] = useState("");
  const [imageBuffer, setImageBuffer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLocationChange = (event) => {
    const input = event.target.value;
    setLocation(input);
  };

  const handleMilesChange = (event) => {
    const input = event.target.value;
    setMilesDriven(input);
  };

  const handleHoursChange = (event) => {
    const input = event.target.value;
    setHoursFlown(input);
  };

  const handleMPGChange = (event) => {
    const input = event.target.value;
    setMPG(input);
  };

  const handleElecChange = (event) => {
    const input = event.target.value;
    setElecticity(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const getNOAAMap = httpsCallable(functions, "getNOAAMap");

    const lbsOfCO2 = (((parseFloat(electricity) / 12) * 123.5235) + (parseFloat(hoursFlown) * 198.416) + (((parseFloat(milesDriven) * 365) / parseFloat(mpg)) * 19.5924))
    let seaLevel = (((lbsOfCO2 * 7888000000) / 17170000000000) * 0.14 * 27) / 12.0
    seaLevel = Math.round(seaLevel)

    if (seaLevel < 1) {
      seaLevel = 1
    }
    else if (seaLevel > 10) {
      seaLevel = 10
    }

    setLoading(true)
    
    getNOAAMap({ q: location, feet: seaLevel })
      .then((res) => {
        setLoading(false)
        setImageBuffer(`data:image/png;base64, ${res.data}`);
      })
      .catch((res) => console.log(res));
  };

  return (
    <div class="h-screen w-screen flex items-center justify-center">
      <Menu className="absolute top-5 left-5" />
      <Box>
        <p className="text-2xl mb-6 font-bold">Sea Level Rise Impact Tool</p>
        <Box
          sx={{
            bgcolor: "grey.200",
            p: 2,
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
              <TextField
                id="outlined-basic"
                label="Location"
                defaultValue="Waco, TX"
                variant="outlined"
                value={location}
                onChange={handleLocationChange}
              />
            </Box>
            <Box sx={{ mb: 1 }}>
              <div style={{ marginBottom: "1rem" }}>
                <Grid container spacing={2}>
                  <Grid item>
                    <TextField
                      id="outlined-basic"
                      label="Miles Driven Per Day"
                      variant="outlined"
                      inputProps={{
                        type: "number",
                        min: 0,
                      }}
                      value={milesDriven}
                      onChange={handleMilesChange}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="outlined-basic"
                      label="Average MPG of Your Car"
                      variant="outlined"
                      inputProps={{
                        type: "number",
                        min: 0,
                      }}
                      value={mpg}
                      onChange={handleMPGChange}
                    />
                  </Grid>
                </Grid>
              </div>
              <Grid container spacing={2}>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="Hours Flown Per Year"
                    variant="outlined"
                    inputProps={{
                      type: "number",
                      min: 0,
                    }}
                    value={hoursFlown}
                    onChange={handleHoursChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="$ on Electricity Yearly"
                    variant="outlined"
                    inputProps={{
                      type: "number",
                      min: 0,
                    }}
                    value={electricity}
                    onChange={handleElecChange}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                sx={{ marginRight: "0.5rem", marginLeft: "1.05rem" }}
              >
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{ marginLeft: "0.5rem" }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="mt-10">{
          (loading) ?
            "Loading..."
          :
            imageBuffer && <img src={imageBuffer} alt="Not Found" />
          }
        </Box>
      </Box>
      {!imageBuffer && (
        <>
          <Wave
            className="absolute bottom-4"
            fill="#3680a3"
            paused={false}
            options={{
              height: 10,
              amplitude: 30,
              speed: 0.3,
              points: 3,
            }}
          />
          <Wave
            className="absolute bottom-0"
            fill="#89CFF0"
            paused={false}
            options={{
              height: 20,
              amplitude: 20,
              speed: 0.2,
              points: 5,
            }}
          />
        </>
      )}
    </div>
  );
}

export default LifeStyleForm;
