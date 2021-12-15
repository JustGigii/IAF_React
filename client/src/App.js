import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import './App.css';

export  class App extends React.Component{
  constructor(props) {
    super(props);
     this.state = {
      Altitude: 0,
      HIS: 0,
      ADI: 0,
    };
  }
  

handleAltitude= (value) => {
  this.setState({ Altitude: value})
}
handleHIS = (value) => {
  this.setState({ HIS: value  })
}
handleADI = (value) => {
  this.setState({ ADI: value  })
}
AllValid = () => {
  console.log(this.state.Altitude)
  console.log(this.state.HIS)
  console.log(this.state.ADI)
  }

  render() {
  return (

    <div className="App">
     <h1> welcome to the flight simulator!!!</h1>
     <p>pls enter this data</p>
     <table>
       <tr>
         <td>Altitude</td>
         <td><input type="text" onChangeText={this.handleAltitude}/></td>
       </tr>
       <tr>
         <td>HIS</td>
         <td><input type="text"  onChangeText={this.handleHIS}/></td>
       </tr>
       <tr>
         <td>ADI</td>
         <td><input type="text"  onChangeText={this.handleADI}/></td>
       </tr>
     </table>
     <Button text="send to server"onClick={this.AllValid}/>
    </div>
  );
}
}

export default App;
