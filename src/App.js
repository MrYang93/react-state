import React from 'react';

import Map from './Map.js';

import SelectBar from './SelectBar.js';
import EatWhat from './EatWhat.js';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      num: 0,
      show: false
    }
  }
  handleClick(){
    console.log('aaa');
    // let nu = this.state.num+1;
    // this.setState({num:nu})
    this.setState({num:this.state.num+1})
  }
  handleCut(){
    this.setState({show:!this.state.show})
  }

  render(){
    return(
    <div>
      数字是: {this.state.num}  <br />
      <button onClick={this.handleClick.bind(this)}>+1</button>
      <button onClick={this.handleCut.bind(this)}>{this.state.show? '隐藏':'显示'}</button>
      <p>你现在显示吗? {this.state.show? '显示':'不显示'}</p>
      <p style={{display: this.state.show? 'block':'none'}}>你现在显示吗？</p>
      <Map></Map>
      <SelectBar></SelectBar>
      <EatWhat></EatWhat>
    </div>
    )
  }
}

export default App;

/*定义state
constructor(){
  super();
  this.state = {
    num: 0
  }
}

修改state
this.setState({})

state 控制组件内部状态
state.handleClick.bind(this)
*/
