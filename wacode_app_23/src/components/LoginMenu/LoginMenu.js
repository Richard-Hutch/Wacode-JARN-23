import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { useAuth } from "../../context/AuthContext";
import { Link } from 'react-router-dom'

import "./LoginMenu.css";

function LoginInfo() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  const { login, error, clearErrors } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    try {
      const uid = await login(data.get("email"), data.get("password"));

      if (uid && !error?.isError) {
        console.log("SUCCESSFUL LOGIN");
        //IMPLEMENT FRONT END LOGIC IF LOGIN IS SUCCESSFUL
      }
    } catch (e) {
      console.log("ERROR");
    }
  };

  return (
    <div className="App-backgroundMain">
      <div className="loginInfoContainer">
        <div>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              className="mainContainer"
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="wacodeImage"></div>
              <Typography
                component="h1"
                variant="h5"
                style={{ color: "black" }}
              >
                <EmojiPeopleIcon></EmojiPeopleIcon> Welcome to our app!
                {/* <div className="loginContainer">
              <AccountBoxIcon></AccountBoxIcon> 
            </div> */}
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  style={{ color: "black" }}
                  inputProps={{
                    style: { color: "black" },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  style={{ color: "black" }}
                  inputProps={{
                    style: { color: "black" },
                  }}
                />
                <div className="signinContainer">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                    as={Link} to ="/tool"

                  >
                    Sign In
                  </Button>
                  <Button
                    type="create"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                  >
                    Create Account
                  </Button>
                </div>
              </Box>
            </Box>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default LoginInfo;
