import axios from "axios";

class EmployeePayrollService {
  baseURL = `http://localhost:8081/employeepayrollservice`;

  addEmployee = (data) => {
    console.log(data);
    return axios.post(`${this.baseURL + "/create"}`, data);
  };

  delete = (data) => {
    //return axios.delete(this.baseURL + 'delete/',data)
    axios.delete(`${this.baseURL}/delete/${data}`);
  };

  getAllEmployee = () => {
    return axios.get(`${this.baseURL + "/get/"}`);
  };
  getEmployeeById = (empId) => {
    return axios.get(this.baseURL + `/get/${empId}`);
  };

  updateEmployee = (empId, data) => {
    console.log(empId);
    return axios.put(`${this.baseURL}` + `/update/${empId}`, data);
  };
}

export default new EmployeePayrollService();
