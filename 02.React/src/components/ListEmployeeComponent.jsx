import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService'; // Spring Boot link

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [] // Initialize employees array, const names=["Bruce","Clark","Diana"]
        }

        this.addEmployee = this.addEmployee.bind(this)
        this.editEmployee = this.editEmployee.bind(this)  /* GoToUpdateForm GTUF:2*/
        this.deleteEmployee = this.deleteEmployee.bind(this)

    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id)
            .then((res) => {  //promise
                this.setState({employees:this.state.employees.filter(employee=>employee.id !==id)})
            });
    }

    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`);  // Routing
    }


    editEmployee(id) {
        this.props.history.push(`/update-employee/${id}`);  // Routing  {/* GoToUpdateForm GTUF:3*/}
    }



    // Καλείται αμέσως μόλις το component γίνει mount.
    componentDidMount() {  // Εδώ καλούμε το REST API.
        EmployeeService.getEmployees()
            .then((res) => {  //promise
                this.setState({ employees: res.data });
            });
    }

    addEmployee() {
        this.props.history.push('/add-employee');  // Routing
    }




    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>

                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>

                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(     //names.map(x=> <h2> {x} </h2>)
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstname}</td>
                                            <td>{employee.lastname}</td>
                                            <td>{employee.emailId}</td>
                                            <td> {/* GoToUpdateForm GTUF:1*/}
                                                <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                                <button onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger" style={{ marginLeft: "10px" }}>Delete</button>
                                                <button onClick={() => this.viewEmployee(employee.id)} className="btn btn-warning" style={{ marginLeft: "10px" }}>View</button>
                                            </td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
