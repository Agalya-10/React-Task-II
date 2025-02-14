import React, { Component, ChangeEvent, FormEvent } from "react";

interface FormData {
  Name: string;
  address: string;
  Age: string;
  bloodGroup: string;
  gender: string;
  date?: string;
}

interface State {
  formData: FormData;
  tableData: FormData[];
  isEditing: boolean;
  editIndex: number | null;
}

class Profile extends Component<{}, State> {
  constructor(props: {}) {
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

  handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newEntry = { ...this.state.formData, date: new Date().toLocaleDateString() };

    if (this.state.isEditing && this.state.editIndex !== null) {
      const updatedTableData = [...this.state.tableData];
      updatedTableData[this.state.editIndex] = newEntry;
      this.setState({ tableData: updatedTableData, isEditing: false, editIndex: null });
    } else {
      this.setState((prevState) => ({
        tableData: [...prevState.tableData, newEntry],
      }));
    }

    this.setState({
      formData: { Name: "", address: "", Age: "", bloodGroup: "", gender: "" },
    });
  };

  handleEdit = (index: number) => {
    const dataToEdit = this.state.tableData[index];
    this.setState({ formData: dataToEdit, isEditing: true, editIndex: index });
  };

  handleDelete = (index: number) => {
    const updatedTableData = this.state.tableData.filter((_, i) => i !== index);
    this.setState({ tableData: updatedTableData });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1 style={{ textAlign: "center" }}>Form</h1>
          <label>
            Name
            <input type="text" name="Name" value={this.state.formData.Name} onChange={this.handleChange} required />
          </label>
          <br />
          <label>
            Address
            <textarea name="address" value={this.state.formData.address} onChange={this.handleChange} required />
          </label>
          <br />
          <label>
            Age
            <input type="number" name="Age" value={this.state.formData.Age} onChange={this.handleChange} required />
          </label>
          <br />
          <label>
            Blood Group
            <select name="bloodGroup" value={this.state.formData.bloodGroup} onChange={this.handleChange} required>
              <option value="" disabled>Select a Group</option>
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
          <label>Gender</label>
          <div>
            <label>
              <input type="radio" name="gender" value="Male" checked={this.state.formData.gender === "Male"} onChange={this.handleChange} />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" checked={this.state.formData.gender === "Female"} onChange={this.handleChange} />
              Female
            </label>
            <label>
              <input type="radio" name="gender" value="Others" checked={this.state.formData.gender === "Others"} onChange={this.handleChange} />
              Others
            </label>
          </div>
          <br />
          <button type="submit">{this.state.isEditing ? "Update" : "Add"}</button>
          <button type="button" onClick={() => this.setState({ formData: { Name: "", address: "", Age: "", bloodGroup: "", gender: "" } })}>
            Cancel
          </button>
        </form>

        <table style={{ marginTop: "20px", width: "100%" }}>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>Address</th>
              <th>Age</th>
              <th>Blood Group</th>
              <th>Gender</th>
              <th>Date</th>
              <th>Actions</th>
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
                <td>
                  <button onClick={() => this.handleEdit(index)}>Edit</button>
                  <button onClick={() => this.handleDelete(index)}>Delete</button>
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
