import React, { Component } from 'react';
import {
  TextInput,
  View,
  Text,
  Button,
  Alert,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
interface BananaProps {

}
declare interface BananaState {
  text: string;
}
const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
export default class Bananas extends Component<BananaProps, BananaState> {
  constructor(props: BananaProps) {
    super(props);
    this.state = { text: '' };
  }
  //简单文本输入事件展示
  render() {
    return (
      <View style={{ height: 100 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder='我是placeholder'
          onChangeText={(text: string) => this.setState({ text })}
        />
        <Text style={{ fontSize: 42, padding: 20 }}>
          {this.state.text
            .split('')
            .map((word) => word && 'pp')
            .join(' ')}
        </Text>
        <Button
          title='我是按钮'
          color='pink'
          onPress={() => Alert.alert('typescript是亲儿子')}
        />
        <TouchableNativeFeedback
          onPress={this._onPressButton}
          onLongPress={this._onLongPressButton}
        >
          <View>
            <Text style={styles.bigBlue}>水光潋滟晴方好</Text>
          </View>
        </TouchableNativeFeedback>
        {/* 其他按钮效果 
        根据视觉反馈分为四种 TouchableHighlight,TouchableNativeFeedback,TouchableOpacity,TouchableWithoutFeedback*/}
      </View>
    );
  }

  private _onPressButton() {
    Alert.alert('来自xxx的点击');
  }
  private _onLongPressButton() {
    Alert.alert('来自xxx的长按');
  }
}
