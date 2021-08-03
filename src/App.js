import  React  from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import logo from './assets/static/Logo 3x.png';
import './App.css';

function App() {
  return (
    <BrowserRouter className="App">
      <header className='flex flex-col md:flex-row md:justify-around place-items-center'>
        <img className='h-32 w-9/12 object-cover md:h-full md:w-60' src={logo} alt="Logo Yemma"/>
        <div className='flex justify-center font-mono text-lg'>
          <Link className='mx-3 text-gray-600 md:text-xl hover:text-gray-900' to='/'>
            Home
          </Link>
          <Link className='mx-3 text-gray-600 md:text-xl hover:text-gray-900' to='/AboutUs'>
            Acerca de
          </Link>
        </div>
    </header>

      <Switch>
        <Route path='/AboutUs'>
          <AboutUs/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;