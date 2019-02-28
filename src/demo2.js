import React, { Component } from 'react';

class demo2 extends Component {
  constructor(props){
    super(props);
    this.state={
      demo2:'demo2组件'
    }
  }
  render() {
    return (
      <div className="demo2">
        <div>{this.state.demo2}</div>
      </div>
    );
  }
}

export default demo2;
