import React from 'react';
import ReactDOM from 'react-dom';

var AddTaskForm = React.createClass({
  getInitialState: function () {
    return {
      textIsEmpty: true
    }
  },
  componentDidMount: function() {
    ReactDOM.findDOMNode(this.refs.addInput).focus();
  },
  onFieldChange: function(fieldName, event) {
    let isFieldFilled = !event.target.value.trim().length > 0;
    this.setState({[''+fieldName]:isFieldFilled})
  },
  onBtnClickHandler: function(e) {
    e.preventDefault();
    alert(ReactDOM.findDOMNode(this.refs.addInput).value);
  },
  render: function() {
    return (
    <form className="add-form">
    <input type='text' placeholder='Task Text' defaultValue='' ref='addInput' onChange={this.onFieldChange.bind(this, 'textIsEmpty')} />
    <button onClick={this.onBtnClickHandler}>Add Task</button>
    </form>
    )
  }
});

export default AddTaskForm;