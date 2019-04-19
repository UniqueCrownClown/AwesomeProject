import React, { Component } from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
import VerticalBox from '../../components/VerticalBox'
const styles = StyleSheet.create({
  scape: {
    marginTop: 20,
    marginBottom: 20,
  },
});
export default class Main extends Component {
  public props: any;
  public state: any;
  private linkData: Array<any> =
    [{ text: 'toe游戏1', source: require('./../../asserts/images/icon-1.png'), link: 'Toe' },
    { text: 'toe游戏2', source: require('./../../asserts/images/icon-2.png'), link: 'Login' },
    { text: 'toe游戏3', source: require('./../../asserts/images/icon-3.png'), link: 'Toe' }]
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (<View style={[{ flex: 1, backgroundColor: '#f5f5f5' }]}>
      <Text style={styles.scape}>测试类</Text>
      <VerticalBox linkData={this.linkData} />
      <Text style={styles.scape}>demo类</Text>
      <VerticalBox linkData={this.linkData} />
    </View>)

  }
}