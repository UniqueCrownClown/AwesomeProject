import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import {AppContainer} from '../router'


const store = configureStore();

export default class HelloWorldApp extends Component {
  componentDidMount() {
    console.info('react生命周期');
  }
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
