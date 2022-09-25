import React from 'react';
import '../Assets/CSS/App.css';
import ZingTouch from 'zingtouch'

import Ipod from '../Stateless/Ipod';


class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      activeItem : 'Music',
      change:0,
    }
  }

  componentDidMount() {
  }

   rotateWheel = () => {
    const containerElement = document.getElementById('container');
    const activeRegion = ZingTouch.Region(containerElement);
    
    activeRegion.bind(containerElement, "rotate", (event) => {
        const newAngle = event.detail.distanceFromLast;
        // let change = 0;
        // console.log('this.state.change', this.state.change);
        // console.log('New angle',newAngle);
        if(newAngle< 0){
          this.setState({
            change: this.state.change+1,
          })
          if(this.state.change === 15){
              // console.log("this.state.change state");
              // this.state.change = 0;
              this.setState({
                change: 0,
              })
              if(this.state.activeItem === 'Music'){
               this.state.activeItem = 'Games'
              }else if(this.state.activeItem === 'Games'){
                this.state.activeItem = 'Playlist'
              }else if(this.state.activeItem === 'Playlist'){
                this.state.activeItem = 'Settings'
              }else if(this.state.activeItem === 'Settings'){
                this.state.activeItem = 'Music'
              }
              this.setState({activeItem: this.state.activeItem});
          }
      }else{
          // console.log('else',this.state.change);
          this.setState({
            change: this.state.change+1,
          })
          if(this.state.change === 15){
              // console.log("this.state.change state");
              this.setState({
                change: 0,
              })
              if(this.state.activeItem === 'Music'){
                this.state.activeItem = 'Settings'
              }else if(this.state.activeItem === 'Settings'){
               this.state.activeItem = 'Playlist'
              }else if(this.state.activeItem === 'Playlist'){
                this.state.activeItem = 'Games'
              }else if(this.state.activeItem === 'Games'){
                this.state.activeItem = 'Music'
              }

              this.setState({activeItem: this.state.activeItem});
          }
       
      }
    })
  }
  render(){
  return (
    <div className="App">
     <Ipod 
        rotateWheel={this.rotateWheel}
        activeItem={this.state.activeItem}
        
     
     />
    </div>
  );
  }
}

export default App;
