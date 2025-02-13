import React, { Component } from "react";
import { TextField, Button, Paper, Typography, Box, IconButton, Grid, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { Facebook, Google, LinkedIn } from "@mui/icons-material";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      Email: "",
      Role: "",
      Mobilenumber: "",
      error: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, Email, Role, Mobilenumber, password } = this.state;

    if (!username || !password || !Email || !Role || !Mobilenumber) {
      this.setState({ error: "Please fill all fields!" });
      return;
    }

    console.log("Username:", username);
    console.log("Email:", Email);
    console.log("Mobile number:", Mobilenumber);
    console.log("Role:", Role);
    console.log("Password:", password);

    // Navigate based on role
    if (Role === "User") {
      window.location.href = "/user";
    } else if (Role === "Admin") {
      window.location.href = "/admin";
    }
  };

  handleSignup = () => {
    window.location.href = "/signin";
  };

  render() {
    return (
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          p: 2,
        }}
      >
        <Grid
          container
          component={Paper}
          elevation={6}
          sx={{
            maxWidth: "850px",
            height: "auto",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
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
              Welcome Back!
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
              To keep connected with us please login with your personal info
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                borderRadius: "20px",
                px: 4,
              }}
              onClick={this.handleSignup}
            >
              SIGN IN
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              px: 4,
              py: 3,
            }}
          >
            <Typography variant="h4" color="#2BB673" sx={{ fontWeight: "500" }}>
              Create Account
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton color="primary">
                <Facebook />
              </IconButton>
              <IconButton color="error">
                <Google />
              </IconButton>
              <IconButton color="primary">
                <LinkedIn />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              or use your email for Registration
            </Typography>

            <Box
              component="form"
              onSubmit={this.handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2,
              }}
            >
              <TextField
                label="Username"
                name="username"
                variant="outlined"
                fullWidth
                required
                onChange={this.handleChange}
              />
              <TextField
                label="Email"
                name="Email"
                variant="outlined"
                fullWidth
                required
                onChange={this.handleChange}
              />
              <TextField
                label="Mobile Number"
                name="Mobilenumber"
                type="number"
                variant="outlined"
                fullWidth
                required
                onChange={this.handleChange}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                required
                onChange={this.handleChange}
              />
              
              <FormControl fullWidth required>
                <InputLabel>Role</InputLabel>
                <Select
                  name="Role"
                  value={this.state.Role}
                  onChange={this.handleChange}
                  label="Role"
                >
                  <MenuItem value="User">User</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </FormControl>

              {this.state.error && (
                <Typography color="error">{this.state.error}</Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "#2BB673", borderRadius: "20px" }}
              >
                Register
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Signup;
