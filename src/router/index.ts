import Flex from './../view/Test/Flex';
import Bananas from './../view/Test/Bananas';
import FilmList from './../view/Test/FilmList';
import ButtonList from './../view/Test/ButtonList';
import ScanScreen from './../view/Test/ScanScreen';
import ModalTester from './../view/Test/Modal/ModalTester';
import TestFlatList from './../view/Test/TestFlatList';
import MainPage from './../view/MainPage';
import LoginPage from './../view/LoginPage';
import Toe from './../view/toe/Toe';
import SignUp from './../view/login/SignUp';
import SignOn from './../view/login/SignOn';
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
    SignUp: { screen: SignUp },
    SignOn: { screen: SignOn },
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