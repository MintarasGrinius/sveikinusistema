import React, { Component } from "react";
import ComponentService from "../services/EmployeeService";

export default class CreateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      paveiksliukas: "",
      tekstas: "",
      audio: "",
      vardas: "",
    };

    this.changePaveiksliukasHandler = this.changePaveiksliukasHandler.bind(
      this
    );
    this.changeTekstasHandler = this.changeTekstasHandler.bind(this);
    this.changeAudioHandler = this.changeAudioHandler.bind(this);
    this.saveComponent = this.saveComponent.bind(this);
  }

  componentDidMount = () => {
    if (this.state.id === "_add") {
      return;
    } else {
      ComponentService.getComponentByID(this.state.id).then((res) => {
        let component = res.data;
        console.log(component);
        this.setState({
          paveiksliukas: component.paveiksliukas,
          tekstas: component.tekstas,
          audio: component.audio,
          vardas: component.vardas,
        });
      });
    }
  };

  saveComponent = (e) => {
    e.preventDefault();
    let component = {
      paveiksliukas: this.state.paveiksliukas,
      tekstas: this.state.tekstas,
      audio: this.state.audio,
      vardas: this.state.vardas,
    };

    if (this.state.id === "_add") {
      console.log("component => " + JSON.stringify(component));
      ComponentService.createComponent(component).then((res) => {
        this.props.history.push("/");
      });
    } else {
      ComponentService.updateComponent(component, this.state.id).then((res) =>
        this.props.history.push("/sveikinimai")
      );
    }
  };

  cancel = () => {
    this.props.history.push("/");
  };

  changeTekstasHandler = (event) => {
    this.setState({ tekstas: event.target.value });
  };

  changePaveiksliukasHandler = (event) => {
    this.setState({ paveiksliukas: event.target.value });
  };

  changeAudioHandler = (event) => {
    this.setState({ audio: event.target.value });
  };

  changeVardasHandler = (event) => {
    this.setState({ vardas: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-1 offset-md-3">
              <h3 className="text-center">
                {this.state.id === "_add" ? "Add Employee" : "Update Employee"}
              </h3>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <label htmlFor="">Paveiksliukas</label>
                    <input
                      type="text"
                      placeholder="Paveiksliukas"
                      name="paveiksliukas"
                      className="form-control"
                      value={this.state.paveiksliukas}
                      onChange={this.changePaveiksliukasHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Tekstas</label>
                    <input
                      type="text"
                      placeholder="Tekstas"
                      name="tekstas"
                      className="form-control"
                      value={this.state.tekstas}
                      onChange={this.changeTekstasHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Audio</label>
                    <input
                      type="email"
                      placeholder="Audio"
                      name="audio"
                      className="form-control"
                      value={this.state.audio}
                      onChange={this.changeAudioHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Vardas</label>
                    <input
                      type="email"
                      placeholder="Vardas"
                      name="vardas"
                      className="form-control"
                      value={this.state.vardas}
                      onChange={this.changeVardasHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveComponent}
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
