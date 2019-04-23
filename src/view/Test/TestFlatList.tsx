import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

export default class TestFlatList extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      // 长列表数据的展示用FlatList或是SectionList(带有字母，联系人列表之类的)
      //navigation三个自动跳转路由方法
      // this.props.navigation.goBack()
      // this.props.navigation.navigate('Home')
      // this.props.navigation.push('Details')
      //路由是堆栈式的,堆栈
      <View style={styles.container}>
        <View>
          <Button
            title='Go to Bananas'
            onPress={() => (this.props as any).navigation.navigate('Bananas')}
          />
        </View>
        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    backgroundColor: '#cde',
    height: 200,
    width: 750,
  },
  btn: {
    textAlign: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
