import React, { Component } from 'react';
import { connect } from 'react-redux';
class demo2 extends Component {
  constructor(props){
    super(props);
    this.state={
      demo2:'demo2组件',
      show:false
    }
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    this.setState({
      show:nextProps.newDemoBool
    })
  }
  render() {
    let newView;
    if(this.props.newDemoBool) {
      newView = <h3>demo2组件状态改变后</h3>
    } else {
      newView = <h3>demo2组件状态未改变前</h3>
    }
    // console.log(this.state.show);
    let showDiv;
    if(this.state.show) {
      showDiv = <div>show</div>
    } else {
      showDiv = <div>UNshow</div>
    }
    return (
      <div className="demo2">
      <h2>{this.state.demo2}</h2>
        <div>{newView}</div>
        {showDiv}
        <div>{this.props.newDemoState} + demo2组件</div>
      </div>
    );
  }
}


const mapStateToProps = state =>({
  newDemoState:state.Demo1Reducer.item,
  newDemoBool:state.Demo1Reducer.show
})

export default connect(mapStateToProps,{ })(demo2);
