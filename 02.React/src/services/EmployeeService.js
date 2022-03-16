import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees" // Από το Spring Boot.

class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }


    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee); // employee: To pass form data employee
    }

    // Πατήθηκε το κουμπί GoToUpdateForm    
    getEmployeeById(employeeId) { // Go to Update form -->  {/* GoToUpdateForm GTUF:6*/}
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }


    // Κάναμε τις αλλαγές και πατάμε το κουμπί Update 
    updateEmployee(employee, employeeId) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

}

export default new EmployeeService()
