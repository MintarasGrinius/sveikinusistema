import React, { Component } from "react";
import ComponentService from "../services/EmployeeService";

class CardsOfComponent extends Component {
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
        <div class="row row-cols-1 row-cols-md-3">
          {this.state.components.map((component) => (
            <div class="col mb-4">
              <div className="card">
                <img
                  src={component.paveiksliukas}
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{component.vardas}</h5>
                  <p className="card-text">{component.tekstas}</p>
                  <small className="text-muted">{component.audio}</small>
                </div>
                <div className="card-footer">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CardsOfComponent;
