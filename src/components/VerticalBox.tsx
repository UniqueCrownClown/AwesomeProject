import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert
} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor:'#fff',

  },
  gridTd: {
    borderRightWidth:1,
    borderBottomWidth:1,
    borderColor:'#f5f5f5',
  },
  imageBox:{
    flex:0,
    height:100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridTdText: {
    fontSize: 18,
    textAlign: 'center',
  }
});
//3*3的格子组件
export default class VerticalBox extends Component {
  public props: any;
  public state: any;
  private linkData: Array<any> =[];
  constructor(props: any) {
    super(props)
    this.props = props;
  }

  render() {
    const MainWidth = Dimensions.get('window').width;
    this.linkData =this.props.linkData;
    const xxxx = (length: number) => {
      let res = [];
      for (let i = 0; i < length; i++) {
        res.push(
          <View key={i.toString()} style={[styles.gridTd, { width: MainWidth * 0.333, height: 128 }]}>
            <TouchableOpacity onPress={this.redirectTo.bind(this, this.linkData[i].link)}>
              <View style= {styles.imageBox}>
              <Image
                source={this.linkData[i].source}
                style={[{ width: 86, height: 80, }]}
              />
              </View>
              <Text style={styles.gridTdText}>{this.linkData[i].text}
              </Text>
            </TouchableOpacity></View>)
      }
      return res
    }
    return (<View style={styles.main}>
      {xxxx(3)}
    </View>)
  }

  public _onPress(arg: string) {
    console.info(arg);
    // Alert.alert(arg);
    this.props.navigation.navigate(arg);
  }

  public redirectTo(arg: string) {
    console.info(arg);
    (this.props as any).navigation.navigate(arg);
  }
}
