import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';
import EmployeeForm from '../EmployeeForm';
import Employee from '../Employee';


class TreeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      editingEmployeeId: null,
      notification: ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/employees.json')
    .then(response => {
      console.log(response);
      this.setState({ employees: response.data });
    })
    .catch(error => console.log(error));
  }

  addNewEmployee = () => {
    axios.post(
      'http://localhost:3001/api/v1/employees',
      { employee:
        {
          title: '',
          name: '',
          emp_id: '',
          manager_id: ''
        }
      }
    )
    .then(response => {
      console.log(response);
      const employees = update(this.state.employees, {
         $splice: [[0, 0, response.data]]
       });
      this.setState({
        editingEmployeeId: response.data.id,
        employees
      });
      console.log(response.data.id);
    })
    .catch(error => console.log(error));
  }

  updateEmployee = (employee) => {
    const employeeIndex = this.state.employees.findIndex(x => x.id ===
      employee.id);
    const employees = update(this.state.employees, {
      [employeeIndex]: { $set: employee }
    });
    this.setState({
      employees,
      notification: 'SAVED'
    });
  }

  resetNotification = () => {
    this.setState({ notification: '' })
  }

  enableEditing = (id) => {
    this.setState({ editingEmployeeId: id })
  }

  handleDelete = () => {
    this.props.onDelete(this.props.employee.id)
  }

  deleteEmployee = (id) => {
    axios.delete(`http://localhost:3001/api/v1/employees/${id}`)
    .then(response => {
      const employeeIndex = this.state.employees.findIndex(x => x.id === id)
      const employees = update(this.state.employees, { $splice: [[employeeIndex, 1]] });
      this.setState({ employees });
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <p>To edit an employee, simply click on its card and edit. To delete an
          employee, hover over the box and click the red X.</p>
        <button
          onClick={this.addNewEmployee}
        >
          Add New Employee
        </button>
        <span className="notification">
          {this.state.notification}
        </span>
        <div className="employeeContainer">
        {this.state.employees.map((employee) => {
          if (this.state.editingEmployeeId === employee.id) {
            return (
              <div className="tile">
                <EmployeeForm
                  employee={employee}
                  key={employee.id}
                  updateEmployee={this.updateEmployee}
                  resetNotification={this.resetNotification}
                />
              </div>
            );
          }
            return (
              <div className="tile">
                <Employee
                  employee={employee}
                  key={employee.id}
                  onClick={this.enableEditing}
                  onDelete={this.deleteEmployee}
                />
              </div>
            );
          }
        )}
      </div>
      </div>
    );
  }
}

export default TreeContainer;
