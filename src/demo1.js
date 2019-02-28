import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDemo1,changeState } from './redux/actions/demo1Actions'
class demo1 extends Component {
  componentDidMount() {
    // 触发action操作
    this.props.getDemo1();
  }
  handleClick() {
    // 触发action
    this.props.changeState();
  }
  render() {
    return (
      <div className="demo1">
      <div>{this.props.newDemoState} + demo1组件</div>
        <button onClick={this.handleClick.bind(this)}>button</button>
      </div>
    );
  }
}


const mapStateToProps = state =>({
  newDemoState:state.Demo1Reducer.item,
  newDemoBool:state.Demo1Reducer.show
})

export default  connect(mapStateToProps, { getDemo1,changeState })(demo1);   //{} 里面可以是多个方法
