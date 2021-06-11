
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { lazy, useState, Suspense } from 'react'
const HomePage = lazy(()=> import('./pages/HomePage'));
const LoginPage = lazy(()=> import('./pages/LoginPage'));


function Sapp() {
  const [ isLogin, setIsLogin ] = useState(window.localStorage.getItem('name'));


  return (
    <div>
      <Suspense fallback={<><h1 className='text-center mt-5'>404 Not Found</h1></>}>
        <Router>
          <Switch>
            {
              isLogin ?
              <Route path='/' exact component={HomePage} /> :
              <Route path='/' exact render={()=> <LoginPage setIsLogin={setIsLogin} />} />
            }
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default Sapp;
