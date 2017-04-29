import React from 'react';

let data = [
  '这是第一条消息',
  '这是第二条消息',
  '这是第三条消息',
  '这是第四条消息'
]
class Map extends React.Component{

  constructor(){
    super();
    this.state={
      text:data
    }
  }
    render(){
      console.log(this.state.text);
      let content = this.state.text.map(
        (item) =><div key={Math.random()}> <p>今天的消息是:{item}</p> <button>点击</button> </div>
      )
      return(
        <div>
          {content}
        </div>
      )
    }
}

export default Map;

//let arr = [];
// let ybl = arr.map( function (currentValue, idnex,array) {               arr数组.map()遍历数组
//   return currentValue+10
// } )
//数组生成的东西都需要加 key ={}， 没有key的话会报警告。Math.random()随机0-1之间的数
