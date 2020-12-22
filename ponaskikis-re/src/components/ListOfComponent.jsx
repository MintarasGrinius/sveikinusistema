import React, { Component } from "react";
import ComponentService from "../services/EmployeeService";

class ListOfComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      components: [],
    };
    this.addComponent = this.addComponent.bind(this);
    this.editComponent = this.editComponent.bind(this);
    this.deleteComponent = this.deleteComponent.bind(this);
  }

  componentDidMount() {
    ComponentService.getComponent().then((res) =>
      this.setState({ components: res.data })
    );
  }

  addComponent() {
    this.props.history.push("/add-sveikinimai/_add");
  }

  editComponent = (id) => {
    this.props.history.push(`/add-sveikinimai/${id}`);
  };

  deleteComponent = (id) => {
    ComponentService.deleteComponent(id).then((res) => {
      this.setState({
        components: this.state.components.filter(
          (component) => component.id !== id
        ),
      });
    });
  };

  viewComponent = (id) => {
    this.props.history.push(`/view-sveikinimai/${id}`);
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Šventinių Sveikinimų sąrašas</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addComponent}>
            Prideti sveikinima
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Paveiksliukas</th>
                <th> Tekstas</th>
                <th> Audio irasas</th>
                <th> Vardas Pavarde</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {this.state.components.map((component) => (
                <tr key={component.id}>
                  <td>{component.paveiksliukas}</td>
                  <td>{component.tekstas}</td>
                  <td>{component.audio}</td>
                  <td>{component.vardas}</td>
                  <td>
                    <button
                      onClick={() => this.editComponent(component.id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteComponent(component.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewComponent(component.id)}
                      className="btn btn-success"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListOfComponent;
