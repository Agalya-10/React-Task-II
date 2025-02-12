import React, { Component } from "react";
import { TextField, Button, Box, Typography, Container, IconButton } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

class Signin extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Username:", formData.get("username"));
    console.log("Password:", formData.get("password"));
  };

  render() {
    return (
      <Container maxWidth="xs">
        <Box sx={{ mt: 8, p: 3, boxShadow: 3, borderRadius: 3, textAlign: "center", color: "#3aaba8" }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <IconButton color="primary">
              <FacebookOutlinedIcon fontSize="medium" />
            </IconButton>
            <IconButton color="error">
              <GoogleIcon fontSize="medium" />
            </IconButton>
            <IconButton color="primary">
              <LinkedInIcon fontSize="medium" />
            </IconButton>
          </Box>

          <form onSubmit={this.handleSubmit}>
            <TextField fullWidth label="Username" variant="outlined" margin="normal" name="username" />
            <TextField fullWidth label="Password" type="password" variant="outlined" margin="normal" name="password" />
            <Button type="submit" variant="contained" bg="#3aaba8" sx={{ mt: 2 }}>
              Login
            </Button>
          </form>
        </Box>
      </Container>
    );
  }
}

export default Signin;
