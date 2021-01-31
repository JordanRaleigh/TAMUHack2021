import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Signin from "./pages/Signin";
import WebcamCapture from "./components/WebcamCapture";

function App() {
  const UserDash = () => {
    return (
      <div>
        <WebcamCapture />
      </div>
    );
  };

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/signin" component={Signin} />

          <Route path="/" exact component={Home} />

          <AuthRoute path="/scan" component={UserDash} />
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
