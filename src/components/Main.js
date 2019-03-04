import React from "react";
import { Switch, Route } from "react-router-dom";
import Employees from "./Employees";
import About from "./About";
import EmployeeDetail from "./EmployeeDetails";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Employees} />
        <Route exact path="/about" component={About} />
        <Route exact path="/employees/add" component={AddEmployee} />
        <Route exact path="/employee/edit/:id" component={EditEmployee} />
        <Route exact path="/employee/:id" component={EmployeeDetail} />
      </Switch>
    </main>
  );
}
