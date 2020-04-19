import React from 'react';
import './App.css';
import Scroll from './components/scroll/scroll.component.jsx'

// import HomePage from './pages/homepage/homepage.component';
import Directory from './components/directory/directory.component';
import Header from './components/header/header-component.jsx';

function App() {
  return (
    <div>
      <Header />
      <Scroll>
        <Directory />
      </Scroll>       
    </div>
  );
}

export default App;
