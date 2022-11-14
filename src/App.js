import {HashRouter as Router, Switch} from 'react-router-dom';

//import {BrowserRouter as Router, Switch} from 'react-router-dom';

import Login from './Features/Login/Controller';
import Main from './Features/Main/Controller';
import AuthRoute from './Features/Auth/AuthRoute';

function App() {
  return (
    <Router>
      <Switch>
        <AuthRoute path="/" component={Login} exact={true} type="guest" />
        <AuthRoute path="/Main" component={Main} type="private" />
      </Switch>
    </Router>
  );
}

export default App;
