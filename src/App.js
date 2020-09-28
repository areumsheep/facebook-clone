import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Header />
      
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Feed */}
        {/* Widgets */} 
      </div>      
    </div>
  );
}

export default App;