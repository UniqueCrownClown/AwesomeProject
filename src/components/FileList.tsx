import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import { element } from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
  fileListContainer: {
    flex: 0,
  },
  fileListItem: {
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  fileListItemText: {
    fontSize: 20,
    width: 280,
    marginHorizontal: 20
  }
});
declare interface FileItem {
  name: string,
  isDictory: boolean
}
declare interface FileListContainerProps {
  items: Array<FileItem>,
  handleSelect: (name: string) => void
}
declare interface FileListContainerState {

}
export default class FileList extends Component<FileListContainerProps> {
  constructor(props: FileListContainerProps) {
    super(props);

  }
  public render() {
    const { items, handleSelect } = this.props;
    const haha = items.map(item =>
      <TouchableOpacity key={item.name} style={styles.fileListItem} onPress={() => handleSelect(item.name)}>
        <Text style={styles.fileListItemText}>{item.name}</Text>
        {item.isDictory ? <Icon name="angle-right" size={20} color="#666" /> : null}
      </TouchableOpacity>)
    return (
      <View style={styles.fileListContainer}>
        {haha}
      </View>
    );
  }
  handleDirect(name: string): void {
    throw new Error("Method not implemented.");
  }

}
