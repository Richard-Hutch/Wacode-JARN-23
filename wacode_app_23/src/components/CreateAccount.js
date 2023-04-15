import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function CreateAccount() {

  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [username, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conf, setConf] = useState('');

  const handleFirstChange = (event) => {
    const input = event.target.value;
    setFirst(input);
  }

  const handleSecondChange = (event) => {
    const input = event.target.value;
    setSecond(input);
  }

  const handleUsernameChange = (event) => {
    const input = event.target.value;
    setUser(input);
  }

  const handleEmailChange = (event) => {
    const input = event.target.value;
    setEmail(input);
  }

  const handlePasswordChange = (event) => {
    const input = event.target.value;
    setPassword(input);
  }

  const handleConfChange = (event) => {
    const input = event.target.value;
    setConf(input);
  }

  return (
    <Box>
    <Typography variant="h5" align="center" gutterBottom>Create Account</Typography>
        <Box sx={{ bgcolor: 'grey.200', p: 2, borderRadius: '12px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)' }}>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                    <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        value={first}
                        onChange={handleFirstChange}
                        sx={{ marginRight: '1rem' }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        value={second}
                        onChange={handleSecondChange}
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                    <TextField
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={handleUsernameChange}
                        sx={{ width: '100%' }}
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                        sx={{ width: '100%' }}
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={handlePasswordChange}
                        sx={{ marginRight: '1rem' }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Confirm Password"
                        variant="outlined"
                        value={conf}
                        onChange={handleConfChange}
                    />
                </Box>
            </Box>
        </Box>
    </Box>
  );
}

export default CreateAccount;