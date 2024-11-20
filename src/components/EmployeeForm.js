import React from "react";
import "./EmployeeForm.css";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      title: "",
      department: "",
    };
  }

  // Method to handle input field changes
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Method to handle form submission
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", this.state);
    this.setState({ name: "", email: "", title: "", department: "" }); // Clear fields
  };

  render() {
    return (
      <div className="employee-form-container">
        <h2>Employee Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Job Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="department"
              name="department"
              value={this.state.department}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;

  