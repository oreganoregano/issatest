import React, { Component } from 'react';
import axios from 'axios';

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.employee.name,
      title: this.props.employee.title,
      emp_id: this.props.employee.emp_id,
      manager_id: this.props.employee.manager_id
    };
  }

  resetNotification = () => {
    this.setState({ notification: '' });
  }

  handleInput = (e) => {
    this.props.resetNotification();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleBlur = () => {
    const employee = {
      title: this.state.title,
      name: this.state.name,
      emp_id: this.state.emp_id,
      manager_id: this.state.manager_id
    };
    axios.put(
      `http://localhost:3001/api/v1/employees/${this.props.employee.id}`,
      {
        employee
      })
    .then(response => {
      this.props.updateEmployee(response.data);
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="tile-object">
        <form onBlur={this.handleBlur} >
          <input
            className='input' type="text"
            name="name" placeholder='Enter a Name'
            value={this.state.name} onChange={this.handleInput}
          />
          <input
            className='input' type="text"
            name="title" placeholder='Enter a Title'
            value={this.state.title} onChange={this.handleInput}
          />
          <input
            className='input' type="text"
            name="emp_id" placeholder='Enter an employee ID'
            value={this.state.emp_id} onChange={this.handleInput}
          />
          <input
            className='input' type="text"
            name="manager_id" placeholder='Enter a manager ID'
            value={this.state.manager_id} onChange={this.handleInput}
          />
        </form>
      </div>
    );
  }
}

export default EmployeeForm;
