import React from 'react';

import Tab1 from './Tab1.js';
import Tab2 from './Tab2.js';
import Tab3 from './Tab3.js';

class SelectBar extends React.Component{
  constructor(){
    super();
    this.state = {show: 0}
  }
  handleClick(num){
    this.setState({show:num})
  }
  render(){

    return(
      <div>
        <button onClick={this.handleClick.bind(this,0)}>选项卡一</button>
        <button onClick={this.handleClick.bind(this,1)}>选项卡二</button>
        <button onClick={this.handleClick.bind(this,3)}>选项卡三</button>
        {this.state.show===0?<Tab1 /> :
          this.state.show===1?<Tab2 />:<Tab3/>
        }
      </div>
    )
  }
}

export default SelectBar;


// bind()小括号里this只是给了一个this，在填其他的就是给函数传的参数。
