import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function LifeStyleForm() {

  const [location, setLocation] = useState('');
  const [milesDriven, setMilesDriven] = useState('');
  const [hoursFlown, setHoursFlown] = useState('');
  const [mpg, setMPG] = useState('');
  const [electricity, setElecticity] = useState('');

  const handleLocationChange = (event) => {
    const input = event.target.value;
    setLocation(input);
  }

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
  }

  const handleElecChange = (event) => {
    const input = event.target.value;
    setElecticity(input);
  }

  return (
    <Box>
    <Typography variant="h5" align="center" gutterBottom>Footprint Calculator</Typography>
        <Box sx={{ bgcolor: 'grey.200', p: 2, borderRadius: '12px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)' }}>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                <TextField
                    id="outlined-basic"
                    label="Your Location?"
                    defaultValue="Waco, TX"
                    variant="outlined"
                    value={location}
                    onChange={handleLocationChange}
                />
                </Box>
                <Box sx={{ mb: 1 }}>
                <div style={{ marginBottom: '1rem' }}>
                    <Grid container spacing={2}>
                    <Grid item>
                        <TextField
                        id="outlined-basic"
                        label="Miles Driven Per Day"
                        variant="outlined"
                        inputProps={{
                            type: 'number',
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
                            type: 'number',
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
                        type: 'number',
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
                        type: 'number',
                        min: 0,
                        }}
                        value={electricity}
                        onChange={handleElecChange}
                    />
                    </Grid>
                </Grid>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" sx={{ marginRight: '0.5rem', marginLeft: '1.05rem' }}>
                    Back
                </Button>
                <Button variant="contained" sx={{ marginLeft: '0.5rem' }}>
                    Submit
                </Button>
                </Box>
            </Box>
        </Box>
    </Box>
  );
}

export default LifeStyleForm;
