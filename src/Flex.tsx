import React, { Component } from 'react';
import { View } from 'react-native';
export default class Flexs extends Component {
  public render() {
    return (
      <View style={{ width: 750, height: 200 }}>
        <View style={{ backgroundColor: 'red', flex: 1 }} />
        <View style={{ backgroundColor: 'pink', flex: 2 }} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}
        >
          <View
            style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
          />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View
            style={{ width: 50, height: 50, backgroundColor: 'steelblue' }}
          />
        </View>
      </View>
    );
  }
}
