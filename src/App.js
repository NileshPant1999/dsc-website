import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MainSection from './MainSection';

function App() {
  return (
    <div className='main'>
      <div className="App">
        <div className="left">
          <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1563888018200/lJaohMmyY.png" height='100px' />
        </div>
        <div className="right">
          <h1>DSC SAMRAT ASHOK TECHNOLOGICAL INSTITUTE</h1>
          <p className='para'>Powered by Google Developers</p>
        </div>
      </div>
      <hr />
      <Navbar />
      <MainSection />
    </div>

  );
}

export default App;
