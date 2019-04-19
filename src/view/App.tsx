import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Bananas from './Bananas';
import Flex from './Flex';
import TestFlatList from './TestFlatList';
import FilmList from './FilmList';
import ButtonList from './ButtonList';
import ScanScreen from './ScanScreen'
import MainPage from './MainPage'
import LoginPage from './LoginPage'
import Toe from './toe/Toe'
import Main from './main/Main'
const RootStack = createStackNavigator(
  {
    FilmList: FilmList,
    Bananas: Bananas,
    Flex: Flex,
    TestFlatList: TestFlatList,
    ButtonList: ButtonList,
    ScanScreen:ScanScreen,
    Toe:Toe,
    Login: { screen: LoginPage },
    Main: { screen: MainPage },
    XMain: Main
  },
  {
    initialRouteName: 'XMain',
  },
);

const store = configureStore();
const AppContainer = createAppContainer(RootStack);
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
