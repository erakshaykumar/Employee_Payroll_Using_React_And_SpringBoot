import './App.css';
import EmployeePayrollForm from './components/EmployeePayrollForm';
import Home from './components/Home';
import { BrowserRouter,Route,Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
         <Route exact path='/payroll-form' component={EmployeePayrollForm}></Route>
         <Route path='/' component={Home}></Route>
         <Route path='/home' component={Home}></Route>
         <Route exact path="/payroll-form/:id" component={EmployeePayrollForm}></Route>
       </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
