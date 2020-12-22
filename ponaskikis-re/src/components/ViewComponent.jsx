import React, { Component } from "react";
import ComponentService from "../services/EmployeeService";

export default class ViewComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      component: {},
    };
  }

  componentDidMount() {
    ComponentService.getComponentByID(this.state.id).then((res) => {
      this.setState({ component: res.data });
    });
  }

  cancel = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <br></br>

        <div className="card col-md-6 offset-md-3" style={{ width: "600px" }}>
          <img
            src={this.state.component.paveiksliukas}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{this.state.component.vardas}</h5>
            <p className="card-text">{this.state.component.tekstas}</p>
            <small>{this.state.component.tekstas}</small>
            <br></br>

            <button
              className="btn btn-danger m-2"
              onClick={this.cancel.bind(this)}
              style={{ marginLeft: "10px" }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
