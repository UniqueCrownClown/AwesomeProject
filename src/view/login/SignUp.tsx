import React, { Component } from 'react';
import { Text, TextInput, Button, View, Alert, StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  inputContainer: {
    flex:0
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
    this.state = { account: '账号', password: '密码' }
  }
  public render() {
    return <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ account: text })}
          value={this.state.account} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password} />
      </View>
      <View>
        <Button title='登录' onPress={this.login.bind(this)}></Button>
      </View>
    </View>
  }
  private login() {
    Alert.alert('login',this.state.account+'hahaha'+this.state.password);
  }
}