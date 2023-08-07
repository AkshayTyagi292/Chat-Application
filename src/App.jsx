import { Switch } from 'react-router-dom';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import SignIn from './pages/SignIn';
import PrivateRoute from './component/PrivateRoute';
import Home from './pages/Home';
import PublicRoute from './component/PublicRoute';

function App() {
  return (<Switch>
    <PublicRoute path="/src/pages/SignIn.js">
      <SignIn />
    </PublicRoute>
    <PrivateRoute path="/">
      <Home />
    </PrivateRoute>
  </Switch>
  );
}

export default App;
