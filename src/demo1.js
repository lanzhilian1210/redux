import React, { Component } from 'react';
import ProptTypes from 'prop-types'
import { connect } from 'react-redux';
import { getDemo1 } from './actions/demo1Actions'
class demo1 extends Component {
  componentDidMount() {
    // 触发action操作
    this.props.getDemo1();
  }
  render() {
    return (
      <div className="demo1">
        <div>{this.props.demo1}</div>
      </div>
    );
  }
}

ProptTypes.propTypes = {
  demo1:ProptTypes.string.isRequired     //强调数据类型
}

const mapStateToProps = state =>({
  demo1:state.Demo1Reducer.item
})

export default  connect(mapStateToProps, { getDemo1 })(demo1);   //{} 里面可以是多个方法
