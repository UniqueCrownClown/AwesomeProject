import React, { Component } from 'react';
import { Text, TextInput, Button, View, Alert, StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  inputContainer: {
    flex: 0
  },
  input: {
    height: 60,
    borderColor: '#e5e5e5',
    borderWidth: 1
  }
})
export default class SignUp extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  public state: any;
  constructor(props) {
    super(props);
    this.state = { account: '', password: '' }
  }
  public render() {
    return <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='账号'
          onChangeText={(text) => this.setState({ account: text })}
          value={this.state.account} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='密码'
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password} />
      </View>
      <View>
        <Button title='登录' onPress={this.login.bind(this)}></Button>
      </View>
      <View>
        <Button title='测试' onPress={this.xxxx.bind(this)}></Button>
      </View>
    </View>
  }
  private async login() {
    let a = {
      usercard: this.state.account,
      password: this.state.password
    }
    let responseValue = await global.http.logon(a);
    console.info(responseValue)
    const { status } = responseValue;
    Alert.alert(status.toString());
  }
  private xxxx() {
    let response = global.http.getTest();
    console.log(response)

  }
}