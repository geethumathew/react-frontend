
import { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      My todo application 
      <FirstComponent></FirstComponent>
      <SecondComponet></SecondComponet>
    </div>
  );
}

function FirstComponent(){
  return (
    <div className="FirstComponent">
   FirstComponent
  </div>
  )
}

class SecondComponet extends Component{
  render(){
  return (
    <div className="SecondComponet">SecondComponet</div>
  )
}
}
export default App;
