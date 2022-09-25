import React from 'react';
import '../Assets/CSS/App.css';

import Ipod from '../Stateless/Ipod';


class App extends React.Component {
  


  render(){
  return (
    <div className="App">
     <Ipod 
        rotateWheel={this.rotateWheel}
        
     
     />
    </div>
  );
  }
}

export default App;
