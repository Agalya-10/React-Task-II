import React, { Component } from "react";
import { TextField, Button, Paper, Typography, Box, IconButton, Grid } from "@mui/material";
import { Facebook, Google, LinkedIn } from "@mui/icons-material";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    
    if (!username || !password) {
      this.setState({ error: "Please fill all fields!" });
      return;
    }
    
    console.log("Username:", username);
    console.log("Password:", password);
  };

  handleSignup = () => {
    window.location.href = "/signup"; 
  };

  render() {
    return (
      <Grid container component="main" sx={{ height: "90vh",maxWidth:"850px",margin: "2rem 0 0 16rem" }}>
        <Grid
          item
          xs={12} md={6}
          component={Paper}
          elevation={6}
          sx={{
            backgroundColor: "#2BB673",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 4,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Hello,Friend!
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
            Enter your personal details and start journey with us
          </Typography>
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white", borderRadius: "20px", px: 4 }}
            onClick={this.handleSignup}
          >
            SIGN UP
          </Button>
        </Grid>

        <Grid
          item
          xs={12} md={6}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 4,
          }}
        >
          <Typography variant="h4" color="#2BB673" gutterBottom  sx={{ fontWeight: '500' }}>
          Hello Again!
          </Typography>

          <Box sx={{ display: "flex", gap: 2, my: 2 }}>
            <IconButton color="primary"><Facebook /></IconButton>
            <IconButton color="error"><Google /></IconButton>
            <IconButton color="primary"><LinkedIn /></IconButton>
          </Box>
          <Typography variant="body2" sx={{ mb: 2 }}>
            or use your email Account:
          </Typography>

          <Box component="form" onSubmit={this.handleSubmit} sx={{ display: "flex", flexDirection: "column", width: "80%", gap: 2 }}>
            <TextField label="Username" name="username" variant="outlined" fullWidth required onChange={this.handleChange} />
            <TextField label="Password" name="password" type="password" variant="outlined" fullWidth required onChange={this.handleChange} />
            {this.state.error && <Typography color="error">{this.state.error}</Typography>}
            <Button type="submit" variant="contained" sx={{ backgroundColor: "#2BB673", borderRadius: "20px" }}>
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default Signin;
