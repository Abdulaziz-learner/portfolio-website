

import{BrowserRouter,
Route,
Switch} from 'react-router-dom';
import Sport from './components/sport';
import Travelling from './components/travelling';
import NavRoute from './components/NavRoute';
import Nomerlar from './components/nomerlar'
import './App.css';
import NewTodo from './components/newTodo';
import Users from './components/users';
import Clock from './components/digitalclock';
import Counter from './components/counter';
import Sapp from './components/sapp';
function App() {
  return (
    <BrowserRouter>
    <NavRoute/>
    <Switch>
    <Route path='/newTodo' component={NewTodo}/>
    <Route path='/sport' component={Sport}/>
    <Route path='/travelling' component={Travelling}/>
    <Route path='/nomerlar' component={Nomerlar}/>
    <Route path='/users' component={Users}/>
    <Route path='/digitalclock' component={Clock}/>
    <Route path='/counter' component={Counter}/>
    <Route path='/' component={Sapp} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
