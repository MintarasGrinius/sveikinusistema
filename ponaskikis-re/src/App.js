import "./App.css";
import CardsOfComponent from "./components/CardsOfComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateComponent from "./components/CreateComponent";
import ViewComponent from "./components/ViewComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={CardsOfComponent} />
            <Route path="/sveikinimai" component={CardsOfComponent} />
            <Route path="/sveikinimaicards" component={CardsOfComponent} />
            <Route path="/view-sveikinimai/:id" component={ViewComponent} />
            <Route path="/add-sveikinimai/:id" component={CreateComponent} />

            {/* <Route path="/" component= {ListEmployeeComponent} /> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
