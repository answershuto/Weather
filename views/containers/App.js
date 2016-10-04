import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as WeatherActions from '../actions/weathers'
import MainPage from '../components/MainPage.react'
import SetupPage from '../components/SetupPage.react'


class App extends Component {
  constructor(props) {
    super(props);
  }

  //初始化渲染后触发
  componentDidMount() {
    const { dispatch } = this.props;
    const { refresh,test } = this.props.actions;

    dispatch(refresh(dispatch))
  }

  //每次接受新的props触发
  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  render() {
    const { refresh,Setup } = this.props.actions;
    const { weather,dispatch } = this.props;

    let show;
    if (!weather.isSetup) {
      show = <MainPage onRefresh={refresh} onSetup={Setup} weather={weather} dispatch={dispatch} />
    }
    else{
      show = <SetupPage isSetup={weather.isSetup} />;
    }

    return (
      <div>
          {show}
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  weather: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    weather: state.weather,
    cityID: state.cityID,
  }
}

function mapDispatchToProps(dispatch) {
  return {  
    actions: WeatherActions,
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
