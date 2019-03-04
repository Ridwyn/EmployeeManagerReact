import React, { Component } from "react";
import { Link } from "react-router-dom";

class EmployeeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item
    };
  }

  render() {
    return (
      <Link to={`/employee/${this.state.item._id}`}>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.state.item.firstname}</span>
            </div>
            <div className="card-action">
              <span className="amber-text text-darken-2">
                {this.state.item.role}|{" "}
              </span>

              <span className="amber-text text-darken-2" href="#">
                {this.state.item.department}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default EmployeeItem;
