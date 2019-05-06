import React from 'react';
import './App.css';
import { GlobalStyle } from './GlobalStyle'
import NavBarWrapper from './components/navbar/navBarWrapper/NavBarWrapper'





class App extends React.Component{
  constructor(){
    super()
    this.state = {
      navTags : ["Mac","iPad","iPhone","Watch","TV","Music","Support"],
    }
  }
  
  
  
  render(){
  return (
    <div>
      <GlobalStyle />
      <NavBarWrapper navTags={this.state.navTags} />
      
    </div>
  );
  }
}

export default App;
