import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Scroll from './components/scroll/scroll.component.jsx'

// import HomePage from './pages/homepage/homepage.component';
import Directory from './components/directory/directory.component';
import Header from './components/header/header-component.jsx';

function App() {
  return (
    <div>
      <Header />
      <Scroll>
        <Switch>
          <Route exact path='/' component={Directory} />
        </Switch>            
      </Scroll>       
    </div>
  );
}

export default App;
