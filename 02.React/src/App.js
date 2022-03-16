import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>

      <Router>

        <HeaderComponent />

        <div className="container">
          <Switch>
            
            <Route path="/" exact component={ListEmployeeComponent}></Route> {/* htp://localhost:3000 */}

            <Route path="/employees" component={ListEmployeeComponent}></Route> {/* htp://localhost:3000/employees */}

            <Route path="/add-employee" component={CreateEmployeeComponent}></Route> {/* htp://localhost:3000/add-employee */}

            {/* GoToUpdateForm GTUF:4*/}
            <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route> {/* htp://localhost:3000/update-employee/1 */}

            {/* ViewEmployeeComponent*/}
            <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route> {/* htp://localhost:3000/update-employee/1 */}

          </Switch>
        </div>

        <FooterComponent />

      </Router >

    </div >
  );
}

export default App;
