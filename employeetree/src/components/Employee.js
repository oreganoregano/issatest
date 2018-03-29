import React, { Component } from 'react';

class Employee extends Component {
  handleClick = () => {
    this.props.onClick(this.props.employee.id);
  }
  handleDelete = () => {
    this.props.onDelete(this.props.employee.id);
  }

  render() {
    return (
      <div className="tile-object" >
        <span className="deleteButton" onClick={this.handleDelete}>
          x
        </span>
        <h4 onClick={this.handleClick}>{this.props.employee.name}</h4>
        <p onClick={this.handleClick}>{this.props.employee.title}</p>
        <p onClick={this.handleClick}>Employee ID: {this.props.employee.emp_id}</p>
        <p onClick={this.handleClick}>Manager ID: {this.props.employee.manager_id}</p>
      </div>
    );
  }
}
export default Employee;
