import React from 'react';
import ReactDOM from 'react-dom';
// const App = () =>(
//   <h2>Hello React </h2>
// );

class App extends React.Component {
  render() {
    return (<h2> Hello React </h2>);
  }
}
ReactDOM.render(
  <App />, document.getElementById('root')
);
