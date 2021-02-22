import React from 'react'
import './App.css'

// PAGES
import Home from './pages/home/Home.js'

// COMPONENTS
import Navbar from './components/navbar/Navbar.js'
import Button from './components/button/Button.js'

// ASSETS
import brand from './images/navbar/starbucks-logo.svg'
import { ReactComponent as Location } from './images/navbar/location-icon.svg';

// ROUTER
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const signIn = 
  <Button edge='round'
          size='small'
          type='hollow'
          color='black'
  >Sign in
  </Button>

const joinNow =
  <Button edge='round'
          size='small'
          type='solid'
          color='black'
  >Join now
  </Button>

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar 
          brand={brand}
          height='60px'
          theme='light'
          color='dark-green'
          breakPoint='tablet'
          leftMenu={[
            <a href="#">MENU</a>,
            <a href="#">REWARDS</a>,
            <a href="#">GIFT CARDS</a>
          ]}

          rightMenu={[
            <a href="https://www.starbucks.com/store-locator?map=39.635307,-101.337891,5z"><Location />Find a store</a>,
            signIn,
            joinNow
          ]}

        />
        <Switch>
          <Route path='' exact component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
