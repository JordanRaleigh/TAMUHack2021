import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/Signup';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import Home from './pages/Home';

function App() {
  const UserDash = () => {
    return <div>Shh only users allowed</div>;
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signin">
            <Login />
            <SignUp />
          </Route>

          <Route path="/" exact component={Home} />

          <AuthRoute path="/account" component={UserDash} />
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
