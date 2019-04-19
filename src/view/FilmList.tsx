import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import { fetchData } from '../api';
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
export default class FilmList extends Component {
  public state: any;
  constructor(props: any) {
    super(props);
    this.state = {
      movies: null,
      loaded: false,
    };
  }
  public async componentDidMount() {
    const aaa = await fetchData();
    console.info(aaa);
    this.setState({ movies: aaa, loaded: true });
  }
  public render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return this.renderMovies(this.state.movies);
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>正在加载电影数据……</Text>
      </View>
    );
  }

  renderMovie(movie: any) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: movie.posters.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
  renderMovies(movies: Array<any>) {
    return (
      <View style={styles.container}>
        <FlatList
          data={movies}
          renderItem={({ item }) => this.renderMovie(item)}
          style={styles.list}
        />
      </View>
    );
  }
}
