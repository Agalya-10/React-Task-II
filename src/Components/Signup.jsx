
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      gender:'',
      password: '',
      confirmPassword: '',
      role: '',
      acceptTerms: false,
      passwordVisible: false,
      confirmPasswordVisible: false,
      navigateToDatastorage: false,
      navigateToRolePage: false, 
      rolePage: '', 
    };
  }

  componentDidMount() {
    const { rowData } = this.props.location?.state || {};
    if (rowData) {
      this.setState({
        firstname: rowData.firstname,
        lastname: rowData.lastname,
        email: rowData.email,
        mobile: rowData.mobile,
        gender: rowData.gender,
        password: rowData.password,
        confirmPassword: rowData.confirmPassword,
        role: rowData.role,
      });
    }
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  validateForm = () => {
    const { firstname, lastname, email, mobile,gender, password, confirmPassword, role, acceptTerms } = this.state;
    let isValid = true;
    let errors = {};

    if (!firstname) {
      isValid = false;
      errors.firstname = 'Firstname is required';
    }

    if (!lastname) {
      isValid = false;
      errors.lastname = 'Lastname is required';
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      errors.email = 'Email is required and must be a valid email';
    }

    if (!mobile || !/^[0-9]{10}$/.test(mobile)) {
      isValid = false;
      errors.mobile = 'Mobile number must be 10 digits';
    }

    if (!password || password.length < 6) {
      isValid = false;
      errors.password = 'Password must be at least 6 characters';
    }

    if (password !== confirmPassword) {
      isValid = false;
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!gender) {
      isValid = false;
      errors.gender = 'Gender is required';
    }
    if (!role) {
      isValid = false;
      errors.role = 'Role is required';
    }

    if (!acceptTerms) {
      isValid = false;
      errors.acceptTerms = 'You must accept the terms and conditions';
    }

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, mobile,gender, password, confirmPassword, role, acceptTerms } = this.state;

   
    if (!this.validateForm()) {
      return;
    }

    const rolePage = role === 'Admin' ? '/Admin' : '/User';

    this.setState({
      navigateToRolePage: true,
      rolePage: rolePage,
    });
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      passwordVisible: !prevState.passwordVisible,
    }));
  };

  toggleConfirmPasswordVisibility = () => {
    this.setState((prevState) => ({
      confirmPasswordVisible: !prevState.confirmPasswordVisible,
    }));
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      mobile,
      gender,
      password,
      confirmPassword,
      acceptTerms,
      passwordVisible,
      confirmPasswordVisible,
      role,
      errors,
      navigateToRolePage,
      rolePage,
    } = this.state;

    if (navigateToRolePage) {
      return <Navigate to={rolePage} />;
    }

    return (
      <form className="form2" style={{ width: '500px' }} onSubmit={this.handleSubmit}>
        <h1 className="head1">{this.props.location?.state?.rowData ? 'Edit Form' : 'Register Form'}</h1>
        <div style={{ display: 'flex' }}>
          <div className="label1 mt-3" style={{ width: '100%' }}>
            <label>Firstname</label>
            <input
              className="box2"
              name="firstname"
              value={firstname}
              onChange={this.handleChange}
              placeholder="Firstname"
              style={{ width: '96%' }}
            />
            {errors?.firstname && <span className="error">{errors.firstname}</span>}
          </div>
          <div className="label1 mt-3" style={{ width: '100%' }}>
            <label>Lastname</label>
            <input
              className="box2"
              name="lastname"
              value={lastname}
              onChange={this.handleChange}
              placeholder="Lastname"
              autoComplete="off"
              style={{ width: '100%' }}
            />
            {errors?.lastname && <span className="error">{errors.lastname}</span>}
          </div>
        </div>
        <div className="label2" style={{ width: '100%' }}>
          <label>Email</label>
          <input
            className="box3"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
            style={{ width: '100%' }}
          />
          {errors?.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="label2" style={{ width: '100%' }}>
          <label>Mobile Number</label>
          <input
            className="box3"
            name="mobile"
            value={mobile}
            onChange={this.handleChange}
            type="text"
            placeholder="Mobile Number"
            style={{ width: '100%' }}
          />
          {errors?.mobile && <span className="error">{errors.mobile}</span>}
        </div>

        <div className="label2" style={{ width: '100%' }}>
          <label>Gender</label>
          <select
            className="box3"
            name="gender"
            value={gender}
            onChange={this.handleChange}
            style={{ width: '100%' }}
          >
            <option value="" disabled>
              Select a gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>

          </select>
          {errors?.gender && <span className="error">{errors.gender}</span>}
        </div>

        <div className="label1" style={{ width: '100%' }}>
          <label>Password</label>
          <div style={{ display: 'flex', position: 'relative' }}>
            <input
              className="box2"
              name="password"
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={this.handleChange}
              placeholder="Password"
              style={{ width: '100%' }}
            />
            <span
              className="eye-icon"
              style={{
                position: 'absolute',
                right: '10px',
                top: '4px',
                cursor: 'pointer',
                fontSize: '15px',
                color: 'gray',
              }}
              onClick={this.togglePasswordVisibility}
            >
              {passwordVisible ? (
                <i className="fas fa-eye" style={{ color: 'rgb(235, 32, 59)' }}></i>
              ) : (
                <i className="fas fa-eye-slash" style={{ color: 'rgb(235, 32, 59)' }}></i>
              )}
            </span>
          </div>
          {errors?.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="label1" style={{ width: '100%' }}>
          <label>Confirm Password</label>
          <div style={{ display: 'flex', position: 'relative' }}>
            <input
              className="box2"
              name="confirmPassword"
              type={confirmPasswordVisible ? 'text' : 'password'}
              value={confirmPassword}
              onChange={this.handleChange}
              placeholder="Confirm Password"
              style={{ width: '100%' }}
            />
            <span
              className="eye-icon"
              style={{
                position: 'absolute',
                right: '10px',
                top: '4px',
                cursor: 'pointer',
                fontSize: '15px',
                color: 'gray',
              }}
              onClick={this.toggleConfirmPasswordVisibility}
            >
              {confirmPasswordVisible ? (
                <i className="fas fa-eye" style={{ color: 'rgb(235, 32, 59)' }}></i>
              ) : (
                <i className="fas fa-eye-slash" style={{ color: 'rgb(235, 32, 59)' }}></i>
              )}
            </span>
          </div>
          {errors?.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <div className="label2" style={{ width: '100%' }}>
          <label>Role</label>
          <select
            className="box3"
            name="role"
            value={role}
            onChange={this.handleChange}
            style={{ width: '100%' }}
          >
            <option value="" disabled>
              Select a Role
            </option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          {errors?.role && <span className="error">{errors.role}</span>}
        </div>

       
        <div style={{ margin: '15px 0' }}>
          <label>
            <input
              type="checkbox"
              name="acceptTerms"
              checked={acceptTerms}
              onChange={this.handleChange}
              style={{ marginRight: '10px' }}
            />
            I accept the terms and conditions
          </label>
          {errors?.acceptTerms && (
            <span className="error" style={{ color: 'red' }}>
              {errors.acceptTerms}
            </span>
          )}
        </div>
        <button className="button2" type="submit" style={{ width: '100%' }}>
          {this.props.location?.state?.rowData ? 'Update' : 'Register'}
        </button>
        <p className="para2">
          Already have an Account?{' '}
          <a
            href="#"
            onClick={() => this.props.history.push('/Signin')}
            className="link"
            style={{ color: 'rgb(235, 32, 59)' }}
          >
            Login
          </a>
        </p>
      </form>
    );
  }
}

export default Signup;