// import React from 'react'

// function Login() {
//   return (
//     <form className="form2">
//         <h1 className="head1" style={{textAlign:'center'}}>Form</h1>
//           <label className="label2 ">
//             Name
//             <input
//               className="box3"
//               type="text"
//               name="Name"
//               placeholder="Name"
              
//             />
//             </label><br/>
          
//         <label className="label2">
//           Address
//           <textarea
//             className="box3"
//             type="text area"
//             name="address"
//             placeholder="Address"
//             required 
//           />
//         </label><br/>
//         <label className="label2">
//           Age
//           <input
//             className="box3"
//             type="number"
//             name="Age"
//             placeholder="Age"
//             required 
//           />
//         </label><br/>

//         <label For="Title">Blood Group</label>
//         <select className='box4'required >
//           <option value="" selected disabled>Select a Group</option>
//           <option value="A+">A+</option>
//           <option value="B+">B+</option>
//           <option value="O+">O+</option>
//           <option value="O-">O-</option>
//           <option value="AB+">AB+</option>
//           <option value="A-">A-</option>
//           <option value="B-">B-</option>
//         </select><br/>
//         <label className="label2">Gender:</label>
// <div className="box5" required >
//     <input type="radio" name="gender" value="Male" /> Male
//     <input type="radio" name="gender" value="Female" /> Female
//     <input type="radio" name="gender" value="Others" /> Others
// </div>

//         <div style={{display:'flex',gap:'10px'}}>
//           <button type='submit' className='button2'>Add</button>
//           <button type='submit' className='button3'>Cancel</button>

//         </div>
//         </form>
//   )
// }

// export default Login
import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    Name: "",
    address: "",
    Age: "",
    bloodGroup: "",
    gender: "",
  });

  const [tableData, setTableData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    const newEntry = {
      ...formData,
      date: new Date().toLocaleDateString(), // Add current date
    };

    if (isEditing) {
      const updatedTableData = [...tableData];
      updatedTableData[editIndex] = newEntry; // Update the edited entry
      setTableData(updatedTableData);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setTableData([...tableData, newEntry]); // Add new entry to the table
    }

    // Reset form fields
    setFormData({
      Name: "",
      address: "",
      Age: "",
      bloodGroup: "",
      gender: "",
    });
  };

  // Handle edit button click
  const handleEdit = (index) => {
    const dataToEdit = tableData[index];
    setFormData(dataToEdit); 
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTableData = tableData.filter((_, i) => i !== index);
    setTableData(updatedTableData); 
  };

  return (
    <div>
      <form className="form2" onSubmit={handleSubmit}>
        <h1 className="head1" style={{ textAlign: "center" }}>
          Form
        </h1>
        <label className="label2">
          Name
          <input
            className="box3"
            type="text"
            name="Name"
            placeholder="Name"
            value={formData.Name}
            onChange={handleChange}
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
            value={formData.address}
            onChange={handleChange}
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
            value={formData.Age}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Blood Group
          <select
            className="box3"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
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
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Others"
              checked={formData.gender === "Others"}
              onChange={handleChange}
            />{" "}
            Others
          </label>
        </div>
        <br />
        <div style={{ display: "flex", gap: "10px" }}>
          <button type="submit" className="button2">
            {isEditing ? "Update" : "Add"}
          </button>
          <button
            type="button"
            className="button3"
            onClick={() =>
              setFormData({
                Name: "",
                address: "",
                Age: "",
                bloodGroup: "",
                gender: "",
              })
            }
          >
            Cancel
          </button>
        </div>
      </form>
      <table class="table table-bordered container" style={{ marginTop: "20px", width: "100%"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Blood Group</th>
            <th>Gender</th>
            <th>Date</th>
            <th  style={{textAlign:'center'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index} >
              <td>{data.Name}</td>
              <td>{data.address}</td>
              <td>{data.Age}</td>
              <td>{data.bloodGroup}</td>
              <td>{data.gender}</td>
              <td>{data.date}</td>
              <td style={{gap:'10px',textAlign:'center'}}>
                <button className="button2" onClick={() => handleEdit(index)}>Edit</button>
                <button  className="button3"  onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Login;
