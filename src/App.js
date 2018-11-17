import React, { Component } from 'react';
import './assets/icons.css';
import './assets/fonts.css';
import ButtonAppBar from './components/header';
import PaperSheet from './components/notes';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      notes:[],
      touched:false
    }
  }

  addNotes(){
    var ic=document.getElementById("add");
    if(!this.state.touched){
    ic.classList.add('ButtonAppBar-icon-3');
    this.setState({touched:true});
    }
    else{
      ic.classList.remove('ButtonAppBar-icon-3');
    this.setState({touched:false});
    }
    var len=this.state.notes.length;
    if(len===0 || len%2!==0){
      var arr=[""];
      this.setState({notes:arr});
    }
  }

  render() {
    var listEmpty=false;
    if(this.state.notes.length===0){
      listEmpty=true;
    }
    else{
      listEmpty=false;
    }
    return (
      <div className="App">
        <ButtonAppBar onMouse={this.addNotes.bind(this)} />
        { listEmpty?<p style={{marginTop:'2em',textAlign:'center',color:'white'}}>Your day looks empty.</p>:<PaperSheet list={this.state.notes} />}
      </div>
    );
  }
}

export default App;
