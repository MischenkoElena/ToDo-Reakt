import React from 'react';
import { render } from 'react-dom';
import taskListComponent from '/taskList/taskList'

// export default class App extends React.Component {
const App = React.createClass({
  getInitialState() {

    return { message: 'Hello, world!' };
  },
  _update(message) {

    this.setState({ message });
  },
  render() {
    return(
      <div>
        <h1>React App</h1>
        <h1>{this.props.title}</h1>
        <taskListComponent message={this.state.message} onUpdate={this._update} />
      </div>
    );
  }
});

export default App;