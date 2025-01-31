import React, { Component } from 'react';
import * as Yup from 'yup';
import { Navigate } from 'react-router-dom';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      },
      passwordVisible: false,
      navigateToRegister: false,
    };
  }

  validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleBlur = (e) => {};

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await this.validationSchema.validate({ email, password }, { abortEarly: false });

      try {
        const response = await fetch(
          'https://67286ba3270bd0b975555c01.mockapi.io/loginpage/Useeffecttaskone',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          }
        );

        if (response.ok) {
          console.log('Submitted Data:', { email, password });
          this.setState({ navigateToRegister: true });
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while logging in. Please try again.');
      }
    } catch (error) {
      const newErrors = error.inner.reduce((acc, currError) => {
        acc[currError.path] = currError.message;
        return acc;
      }, {});

      this.setState({ errors: newErrors });
    }
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      passwordVisible: !prevState.passwordVisible,
    }));
    
  };

  render() {
    const { email, password, errors, passwordVisible, navigateToRegister } = this.state;

    if (navigateToRegister) {
      return <Navigate to="/Signup" />;
    }

    return (
      <div className="formhead">
        <form className="form1" onSubmit={this.handleSubmit}>
          <h1 className="head1 mt-2">Login</h1>
          <p className="head1 mt-2 text-dark" style={{ fontSize: '13px', fontWeight: '500' }}>
            Hello Again!
          </p>

          <label className="label mt-1">Email</label>
          <input
            className="box1"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            autoComplete="off"
          />
          {errors.email && (
            <span style={{ color: 'red', fontSize: '13px', paddingLeft: '14px' }}>
              {errors.email}
            </span>
          )}
          <br />

          <label className="label mt-2">Password</label>
          <div style={{ position: 'relative' }}>
            <input
              className="box1"
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            <span
              onClick={this.togglePasswordVisibility}
              style={{
                position: 'absolute',
                right: '25px',
                top: '55%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              {passwordVisible ? (
                <i className="fas fa-eye" style={{ color: 'rgb(235, 32, 59)' }}></i>
              ) : (
                <i className="fas fa-eye-slash" style={{ color: 'rgb(235, 32, 59)' }}></i>
              )}
            </span>
          </div>
          {errors.password && (
            <span style={{ color: 'red', fontSize: '13px', paddingLeft: '14px' }}>
              {errors.password}
            </span>
          )}
          <br />

          <div className="pass">
            <a className="password" href="">
              Forgot Password?
            </a>
          </div>
          <br />

          <div className="submit">
            <button className="button1 mb-2" type="submit">
              Login
            </button>
          </div>

          <p className="para1">
            Don't have an account?{' '}
            <a
              className="link"
              href="#"
              onClick={() => this.setState({ navigateToRegister: true })}
              style={{ color: 'rgb(235, 32, 59)' }}
            >
              Signup
            </a>
          </p>
        </form>
      </div>
    );
  }
}

export default Signin;
