import axios from "axios";

const BASE_API_URL = "http://localhost:8080/employees"

class EmployeeService{
    addEmployee(employee){
        return axios.post(BASE_API_URL, employee);
    }

    getAllEmployees(){
        return axios.get(BASE_API_URL);
    }

    deleteEmployee(id){
        return axios.delete(BASE_API_URL + "/" + id);
    }

    getEmployeeById(id){
        return axios.get(BASE_API_URL + "/" + id);
    }
    
    updateEmployee(id, employee){
        return axios.put(BASE_API_URL + "/" + id, employee);
    }
}

export default new EmployeeService();