
import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

// Ορίζουμε την κλάση.
class ViewEmployeeComponent extends Component {

    constructor(props) {  //rconst
        super(props)

        this.state = {
            id: this.props.match.params.id, // Έτσι παίρνω την παράμετρο από τον Browser.
            employee: {}

        }
    }


    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id)
            .then(res => {
                this.setState({ employee: res.data }); // Πήρα το Object employee από το Spring Boot.
            })
    }



    render() {
        return (
            <div>
                <br /><br />
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee:  {this.state.employee.lastname} Details</h3>
                    <div className="card-body">
                        <div className="row">
                            First Name: {this.state.employee.firstname}
                        </div>
                        <div className="row">
                            Last Name: {this.state.employee.lastname}
                        </div>
                        <div className="row">
                            Email: {this.state.employee.emailId}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ViewEmployeeComponent;
