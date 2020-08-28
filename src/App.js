import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MainSection from './MainSection';
import MainSection2 from './MainSection2';
import TakeAction from "./TakeAction"


function App() {
  return (
    <div className='main'>
      <div className="App">
        <div className="left">
          <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1563888018200/lJaohMmyY.png" height='100px' />
        </div>
        <div className="right">
          <h1><span>DSC</span>SAMRAT ASHOK TECHNOLOGICAL INSTITUTE</h1>
          <p className='para'>Powered by Google Developers</p>
        </div>
      </div>
      <hr />
      <Navbar />
      <MainSection />
      <MainSection2 />
      <h1 className='event'>Up Coming Events</h1>
      <TakeAction />
    </div>

  );
}

export default App;
