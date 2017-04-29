import React from 'react';



let data = ['白菜','萝卜','青椒','土豆','肉']
class EatWhat extends React.Component{
  constructor(){
    super();
    this.state={
      start: false,
      data,
      text: ''
    }
  }
  select(){
    let result=this.state.data[Math.floor(Math.random()*this.state.data.length)]
    this.setState({text:result})
  }
  handleClick(){
    // this.setState({start:!this.state.start})
    if (this.state.start) {
      //清除计时器
      clearInterval(this.interval)
      //false
      this.setState({start:false})
    }else{
      //计时器
      this.interval=setInterval(()=>this.select(),50);
      //true
      this.setState({start:true})
    }
  }
  render(){
    return(
      <div>
        <p>今天吃什么：{this.state.text}</p>
        <button onClick={this.handleClick.bind(this)}>{this.state.start?'停止':'开始'}</button>
      </div>
    )
  }
}

export default EatWhat;
