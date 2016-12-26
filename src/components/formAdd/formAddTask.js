import React from 'react';
import ReactDOM from 'react-dom';

let AddTaskForm = React.createClass({
  getInitialState: function() {
    return {textIsEmpty: true, addInput: ''};
  },
  componentDidMount: function() {
    ReactDOM.findDOMNode(this.refs.addInput).focus();
  },
  componentWillReceiveProps: function (nextProps) {
    this.clear(nextProps.success);
  },
  onFieldChange: function(fieldName, event) {
    let isFieldFilled = !event.target.value.trim().length > 0;
    this.setState({[''+fieldName]:isFieldFilled, addInput: event.target.value})
  },
  onBtnClickHandler: function(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.addInput);
  },
  clear: function (success) {
    console.log('clear', this.props)
    if (success) {
      this.setState({addInput: '', textIsEmpty: true});
      ReactDOM.findDOMNode(this.refs.addInput).value = '';
      ReactDOM.findDOMNode(this.refs.addInput).focus();
    }
  },
  render: function() {
    console.log('render Add')
    return (
      <form className="add-form">
        <input type='text' placeholder='Task Text' defaultValue='' ref='addInput' onChange={this.onFieldChange.bind(this, 'textIsEmpty')} />
        <button onClick={this.onBtnClickHandler} disabled={this.state.textIsEmpty}>Add Task</button>
      </form>
    )
  }
});

export default AddTaskForm;