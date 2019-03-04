import React, { Component } from "react";
import axios from "axios";
import EmployeeItem from "./EmployeeItem";

class Employees extends Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
  }

  componentWillMount() {
    this.getEmployees();
  }

  getEmployees() {
    axios
      .get("https://flaskemployeeapi.herokuapp.com/api/employees")
      .then(res => {
        this.setState({ employees: res.data }, () => console.log(this.state));
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const employeesItems = this.state.employees.map(employee => {
      return <EmployeeItem key={employee._id} item={employee} />;
    });
    return (
      <div>
        <h1>Employees</h1>
        <div className="row">{employeesItems}</div>
      </div>
    );
  }
}

export default Employees;
