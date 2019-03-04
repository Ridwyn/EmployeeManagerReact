import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      role: "",
      department: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    this.getEmployeeDetails();
  }

  getEmployeeDetails() {
    let employeeId = this.props.match.params.id;
    axios
      .get(`https://flaskemployeeapi.herokuapp.com/api/get/${employeeId}`)
      .then(res => {
        this.setState({
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          role: res.data.role,
          department: res.data.department
        });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateEmployee(newEmployee) {
    let employeeId = this.props.match.params.id;
    axios({
      method: "put",
      url: `https://flaskemployeeapi.herokuapp.com/api/update/${employeeId}`,
      data: newEmployee,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        this.props.history.push("/");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onSubmit(e) {
    const newEmployee = {
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value,
      role: this.refs.role.value,
      department: this.refs.department.value
    };
    this.updateEmployee(newEmployee);
    e.preventDefault();
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
              value={this.state.firstname}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              ref="lastname"
              value={this.state.lastname}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              className="form-control"
              name="role"
              ref="role"
              value={this.state.role}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              className="form-control"
              name="department"
              ref="department"
              value={this.state.department}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    );
  }
}

export default EditEmployee;
