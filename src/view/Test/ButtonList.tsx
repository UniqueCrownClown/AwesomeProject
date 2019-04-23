import React, { Component } from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text
} from 'react-native';
const styles = StyleSheet.create({
  scape: {
    marginTop: 20,
    marginBottom: 20,
  },
});
export default class ButtonList extends Component {
  public props: any;
  constructor(props: any) {
    super(props);
  }
  public render() {
    const { navigation } = this.props;
    const scanData = navigation.getParam('scan', '123456');
    return (
      <View>
        <View style={styles.scape}>
          <Button
            title='测试动画'
            onPress={this.redirectTo.bind(this, 'Flex')}
          />
        </View>
        <View style={styles.scape}>
          <Button
            title='Bananas'
            onPress={this.redirectTo.bind(this, 'Bananas')}
            color='#fba'
          />
        </View>
        <View style={styles.scape}>
          <Button
            title='FilmList'
            onPress={this.redirectTo.bind(this, 'FilmList')}
            color='#cba'
          />
        </View>
        <View style={styles.scape}>
          <Button
            title='TestFlatList'
            onPress={this.redirectTo.bind(this, 'TestFlatList')}
            color='#5ba'
          />
        </View>
        <View style={styles.scape}>
          <Button
            title='登录'
            onPress={this.redirectTo.bind(this, 'Login')}
            color='#5ba'
          />
        </View>
        <View style={styles.scape}>
          <Button
            title='扫码'
            onPress={this.redirectTo.bind(this, 'ScanScreen')}
            color='#5ba'
          />
        </View>
        <View style={styles.scape}>
          <Text>{scanData}</Text>
        </View>
      </View>
    );
  }
  public redirectTo(arg: string) {
    console.info(arg);
    (this.props as any).navigation.navigate(arg);
  }
}
