import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import TestAnimated from '../../components/TestAnimated'
import RNFS from 'react-native-fs';
import FileList from '../../components/FileList'
const styles = StyleSheet.create({
  haha: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
});

declare interface FlexProps {

}
declare interface FlexState {
  haha: Array<any>
}
export default class TestFs extends Component<FlexProps, FlexState> {
  constructor(props: FlexProps) {
    super(props);
    this.state = {
      haha: [{ name: '1', isDictory: true }, { name: '2', isDictory: true }]
    };
  }
  public render() {
    return (
      <View style={{ flex: 0 }}>
        <View>
          <Button title='Basic' onPress={() => this.testRead()}></Button>
          <Button title='Create' onPress={() => this.testCreation()}></Button>
          <Button title='Delete' onPress={() => this.testDelection()}></Button>
        </View>
        <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
          <TestAnimated style={{ width: 250, height: 50, backgroundColor: 'powderblue' }}>
            <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text>
          </TestAnimated>
        </View>
        <FileList items={this.state.haha} handleSelect={this.handleSelect.bind(this)} />
      </View>

    );
  }
  handleSelect(name: string): void {
    // Alert.alert(name);
    const temp = [{ name: '3', isDictory: true }, { name: '4', isDictory: true }];
    this.setState({ haha: temp });
    const rnfsPath = RNFS.ExternalStorageDirectoryPath;
    this.queryDirectory(rnfsPath+'/Android');
  }

  public testRead() {
    // RNFS.DocumentDirectoryPath
    // RNFS.ExternalDirectoryPath;
    const rnfsPath = RNFS.ExternalStorageDirectoryPath;
    console.log(rnfsPath);
    this.queryDirectory(rnfsPath);
  }
  public queryDirectory(path:string){
    RNFS.readDir(path)
      .then((result) => {
        // console.log('GOT RESULT', result);
        result.forEach(element => console.log(element.name))
      }).catch((err) => {
        console.log(err.message, err.code);
      });
  }

  public testCreation() {
    // create a path you want to write to
    // :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
    // but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    console.log(path);
    // write the file
    RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
      .then((success) => {
        console.log('FILE WRITTEN!');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  public testDelection() {
    // create a path you want to delete
    var path = RNFS.DocumentDirectoryPath + '/test.txt';

    return RNFS.unlink(path)
      .then(() => {
        console.log('FILE DELETED');
      })
      // `unlink` will throw an error, if the item to unlink does not exist
      .catch((err) => {
        console.log(err.message);
      });
  }
}
