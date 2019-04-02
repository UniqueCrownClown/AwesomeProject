import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Bananas from './Bananas';
import Flex from './Flex';
import TestFlatList from './TestFlatList';
import FilmList from './FilmList';

const RootStack = createStackNavigator(
  {
    Home: FilmList,
    Bananas: Bananas,
    Flex:Flex,
    TestFlatList:TestFlatList
    
  },
  {
    initialRouteName: 'TestFlatList',
  }
);

const AppContainer = createAppContainer(RootStack);
export default class HelloWorldApp extends Component {
  componentDidMount() {
    console.info('react生命周期');
  }
  render() {
    return <AppContainer />;
  }
}
