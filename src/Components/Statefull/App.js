import React from 'react';
import '../Assets/CSS/App.css';
import ZingTouch from 'zingtouch'

import Ipod from '../Stateless/Ipod';


class App extends React.Component {
  // Function for rotateWheel event listeners
  rotateWheel = () => {
    var containerElement = document.getElementById('container');
    var activeRegion = ZingTouch.Region(containerElement);
    
    activeRegion.bind(containerElement, "rotate", function (event) {
        var newAngle = event.detail.angle;
        console.log(newAngle);
    })
   
  }

  render(){
  return (
    <div className="App">
     <Ipod rotateWheel={this.rotateWheel}/>
    </div>
  );
  }
}

export default App;
