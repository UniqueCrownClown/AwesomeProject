//用fetch来实现和服务器数据交互
//一些基于 XMLHttpRequest 封装的第三方库也可以使用，例如frisbee或是axios
var REQUEST_URL =
  'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';
export const fetchData = () => {
  return new Promise((resolve) => {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        // console.info(responseData);
        resolve(responseData.movies);
      });
  });
};
