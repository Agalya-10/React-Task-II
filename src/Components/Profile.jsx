import React, { Component } from "react";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        Name: "",
        address: "",
        Age: "",
        bloodGroup: "",
        gender: "",
      },
      tableData: [],
      isEditing: false,
      editIndex: null,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      ...this.state.formData,
      date: new Date().toLocaleDateString(),
    };

    if (this.state.isEditing) {
      const updatedTableData = [...this.state.tableData];
      updatedTableData[this.state.editIndex] = newEntry;
      this.setState({
        tableData: updatedTableData,
        isEditing: false,
        editIndex: null,
      });
    } else {
      this.setState((prevState) => ({
        tableData: [...prevState.tableData, newEntry],
      }));
    }

    this.setState({
      formData: {
        Name: "",
        address: "",
        Age: "",
        bloodGroup: "",
        gender: "",
      },
    });
  };

  handleEdit = (index) => {
    const dataToEdit = this.state.tableData[index];
    this.setState({ formData: dataToEdit, isEditing: true, editIndex: index });
  };

  handleDelete = (index) => {
    const updatedTableData = this.state.tableData.filter((_, i) => i !== index);
    this.setState({ tableData: updatedTableData });
  };

  render() {
    return (
      <div>
        <form className="form4" onSubmit={this.handleSubmit}>
          <h1 className="head" style={{ textAlign: "center" }}>Form</h1>
          <label className="label2">
            Name
            <input
              className="box3"
              type="text"
              name="Name"
              placeholder="Name"
              value={this.state.formData.Name}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <label className="label2">
            Address
            <textarea
              className="box3"
              name="address"
              placeholder="Address"
              value={this.state.formData.address}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <label className="label2">
            Age
            <input
              className="box3"
              type="number"
              name="Age"
              placeholder="Age"
              value={this.state.formData.Age}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <label>
            Blood Group
            <select
              className="box3"
              name="bloodGroup"
              value={this.state.formData.bloodGroup}
              onChange={this.handleChange}
              required
            >
              <option value="" disabled>
                Select a Group
              </option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
            </select>
          </label>
          <br />
          <label className="label2">Gender</label>
          <div className="box5">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={this.state.formData.gender === "Male"}
                onChange={this.handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={this.state.formData.gender === "Female"}
                onChange={this.handleChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Others"
                checked={this.state.formData.gender === "Others"}
                onChange={this.handleChange}
              />
              Others
            </label>
          </div>
          <br />
          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit" className="button4">
              {this.state.isEditing ? "Update" : "Add"}
            </button>
            <button
              type="button"
              className="button5"
              onClick={() =>
                this.setState({
                  formData: {
                    Name: "",
                    address: "",
                    Age: "",
                    bloodGroup: "",
                    gender: "",
                  },
                })
              }
            >
              Cancel
            </button>
          </div>
        </form>
        <table className="table table-bordered container" style={{ marginTop: "20px", width: "100%" }}>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>Address</th>
              <th>Age</th>
              <th>Blood Group</th>
              <th>Gender</th>
              <th>Date</th>
              <th style={{ textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tableData.map((data, index) => (
              <tr key={index}>
                 <td>{index + 1}</td>
                 
                <td>{data.Name}</td>
                <td>{data.address}</td>
                <td>{data.Age}</td>
                <td>{data.bloodGroup}</td>
                <td>{data.gender}</td>
                <td>{data.date}</td>
                <td style={{ gap: "10px", textAlign: "center" }}>
                  <button className="button4" onClick={() => this.handleEdit(index)}>Edit</button>
                  <button className="button5 ms-1" onClick={() => this.handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Profile;
