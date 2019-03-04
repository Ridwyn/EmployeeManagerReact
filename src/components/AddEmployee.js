import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class AddEmployee extends Component {
  addEmployees(newEmployee) {
    axios
      .post("https://flaskemployeeapi.herokuapp.com/api/add", newEmployee, {
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }

  onSubmit(e) {
    const newEmployee = {
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value,
      role: this.refs.role.value,
      department: this.refs.department.value
    };
    this.addEmployees(newEmployee);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Link className="btn grey" to="/">
          Back
        </Link>
        <h2>Add a New Employee</h2>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              ref="firstname"
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              ref="lastname"
            />
          </div>
          <div className="input-field">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              className="form-control"
              name="role"
              ref="role"
            />
          </div>
          <div className="input-field">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              className="form-control"
              name="department"
              ref="department"
            />
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    );
  }
}

export default AddEmployee;
