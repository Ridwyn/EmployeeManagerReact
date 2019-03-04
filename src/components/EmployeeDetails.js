import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ""
    };
  }

  componentWillMount() {
    this.getEmployee();
  }

  getEmployee() {
    let employeeId = this.props.match.params.id;
    axios
      .get(`https://flaskemployeeapi.herokuapp.com/api/get/${employeeId}`)
      .then(res => {
        this.setState({ details: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onDelete() {
    let employeeId = this.props.match.params.id;
    axios
      .delete(`https://flaskemployeeapi.herokuapp.com/api/delete/${employeeId}`)
      .then(res => {
        this.props.history.push("/");
        console.log("deleted");
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">
          Back
        </Link>
        <h1> {this.state.details.firstname}</h1>

        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="" alt="" />
          </div>
          <div className="card-content">
            <h6>Firstname: {this.state.details.firstname}</h6>
            <h6>Lastname: {this.state.details.lastname}</h6>
            <h6>Role: {this.state.details.role}</h6>
            <h6>Department: {this.state.details.department}</h6>
          </div>
        </div>
        <Link className="btn" to={`/employee/edit/${this.state.details._id}`}>
          Edit
        </Link>
        <button onClick={this.onDelete.bind(this)} className="btn red right">
          Delete
        </button>
        <hr />
      </div>
    );
  }
}

export default EmployeeDetails;
