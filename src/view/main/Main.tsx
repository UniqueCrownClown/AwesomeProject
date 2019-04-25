import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Button, Alert
} from 'react-native';
import VerticalBox from '../../components/VerticalBox'
import XButton from '../../components/Button'
import Icon from 'react-native-vector-icons/FontAwesome';
declare interface IMainProps {
  navigation: any
}
declare interface IMainState {
  count: number
}
const styles = StyleSheet.create({
  scape: {
    marginTop: 20,
    marginBottom: 20,
  },
});
export default class Main extends Component<IMainProps, IMainState> {
  // static navigationOptions = {
  //   title: '首页',
  // };
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('otherParam', 'A Nested Main'),
  //   };
  // };
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <XButton text='Main' onClick={() => { Alert.alert('啊哈哈') }} />,
      headerRight: (
        <Button
          onPress={() => navigation.getParam('increaseCount')}
          title='+1'
        />
      ),
    }
  };
  constructor(props: IMainProps) {
    super(props);
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }
  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  private linkData1: Array<any> =
    [{ text: 'Toe', source: require('./../../asserts/images/icon-1.png'), link: 'Toe' },
    { text: 'Logon', source: require('./../../asserts/images/icon-2.png'), link: 'SignUp' },
    { text: 'Scan', source: require('./../../asserts/images/icon-3.png'), link: 'ScanScreen' }]
  private linkData2: Array<any> =
    [{ text: 'ModalTest', source: require('./../../asserts/images/icon-1.png'), link: 'ModalExample' },
    { text: 'RNModal', source: require('./../../asserts/images/icon-3.png'), link: 'RNModal' }]


  public render() {
    return (<View style={[{ flex: 1, backgroundColor: '#f5f5f5' }]}>
      <Text style={styles.scape}>Main类</Text>
      <VerticalBox linkData={this.linkData1} navigation={this.props.navigation} />
      <Text style={styles.scape}>Test类</Text>
      <VerticalBox linkData={this.linkData2} navigation={this.props.navigation} />
      <Button
        title="Update the title"
        onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}></Button>
      <Icon name="rocket" size={30} color="#900" />
      <View><Text>{this.state.count}</Text></View>
    </View>)
  }
}