import React from 'react';

import './main.css';

class Trans extends React.Component{
  constructor(){
    super();
    this.state={
      //下来，展示
      show:true
    }
  }
handleClick(){
  this.setState({show: !this.state.show})
}
  render(){
    let styles = {
      top: this.state.show?'30%':'5%',
    }
    let styles1 = {
      top: this.state.show?'30%':'5%',
      overflow: 'hidden',
      height: '20px'
    }
    let styles2 = {
      display: 'none'
    }
    return(
      <div className="container" style={this.state.show?styles:styles1}>
        <button onClick={this.handleClick.bind(this)}>{this.state.show?'上':'下'}</button>
        <h1 style={this.state.show?null:styles2}>你瞅啥！！！</h1>
        <h1 style={this.state.show?null:styles2}>你瞅啥！！！</h1>
        <h1 style={this.state.show?null:styles2}>你瞅啥！！！</h1>
      </div>
    )
  }
}

export default Trans;
