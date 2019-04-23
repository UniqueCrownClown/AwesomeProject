import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import TestAnimated from '../../components/TestAnimated'
var styles = StyleSheet.create({
  haha: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
});
export default class Flexs extends Component {
  public render() {
    return (
      <View style={{ width: 750, height: 200 }}>
        <View style={{ flex: 1 }}>
          <View style={{ backgroundColor: 'red', flex: 1 }} />
          <View style={{ backgroundColor: 'pink', flex: 2 }} />
        </View>
        <View style={styles.haha}>
          <View
            style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
          />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TestAnimated style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </TestAnimated>
      </View>
      </View>
      
    );
  }
}
