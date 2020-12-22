import React, { Component } from "react";
import ComponentService from "../services/EmployeeService";

export default class UpdateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      fistName: "",
      lastName: "",
      emailId: "",
    };

    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }

  updateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      fistName: this.state.fistName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log("employee => " + JSON.stringify(employee));
    ComponentService.updateComponent(employee, this.state.id).then((res) =>
      this.props.history.push("/employees")
    );
  };

  componentDidMount = () => {
    console.log(this.state.id);
    ComponentService.getComponentByID(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        fistName: employee.fistName,
        lastName: employee.lastName,
        emailId: employee.emailId,
      });
    });
  };

  cancel = () => {
    this.props.history.push("/");
  };

  changeFirstNameHandler = (event) => {
    this.setState({ fistName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  render() {
    console.log(this.state.id);

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-1 offset-md-3">
              <h3 className="text-center">Update Employee</h3>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.fistName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.updateEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
