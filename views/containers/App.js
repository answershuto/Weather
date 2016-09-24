import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as WeatherActions from '../actions/weathers'
import MainPage from '../components/MainPage.react'

class App extends Component {
  constructor(props) {
    super(props);
  }

  //初始化渲染后触发
  componentDidMount() {
    
  }

  //每次接受新的props触发
  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  render() {
    const { refresh } = this.props.actions;

    return (
      <div>
        <MainPage onRefresh={refresh} />
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

function mapDispatchToProps(dispatch) {
  return {  
    /*这里用bindActionCreators使用 dispatch 把每个action creator包围起来，这样可以直接调用它们。*/
    actions: bindActionCreators(WeatherActions, dispatch) 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
