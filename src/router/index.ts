import Flex from './../view/Test/Flex';
import Bananas from './../view/Test/Bananas';
import FilmList from './../view/Test/FilmList';
import ButtonList from './../view/Test/ButtonList';
import ScanScreen from './../view/Test/ScanScreen';
import ModalTester from './../view/Test/Modal/ModalTester';
import TestFlatList from './../view/Test/TestFlatList';
import MainPage from './../view/login/MainPage';
import LoginPage from './../view/login/LoginPage';
import Toe from './../view/toe/Toe';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Example from '../view/Test/Modal/example';
import { tabNavigator } from './MyTabNavigator';

const RootStack = createStackNavigator(
  {
    FilmList: FilmList,
    Bananas: Bananas,
    Flex: Flex,
    TestFlatList: TestFlatList,
    ButtonList: ButtonList,
    ScanScreen: ScanScreen,
    Toe: Toe,
    Login: { screen: LoginPage },
    Main: { screen: MainPage },
    Home: { screen: tabNavigator },
    ModalTester: { screen: ModalTester },
    RNModal: { screen: Example }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#137BFE',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
);
export const AppContainer = createAppContainer(RootStack);