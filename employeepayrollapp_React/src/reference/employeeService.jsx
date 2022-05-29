import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function EmployeeService() {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);

  const fetchEmployeeApi = () => {
    axios
      .get("http://localhost:8081/employeepayrollservice/get")
      .then((response) => {
        console.log(response);
        setEmployees(response.data.data);
        setDepartments(response.data.data.departments);
        console.log(response.data.data);
        console.log("departments " + departments);
      });
  };

  return (
    <div>
      <button className="btn btn-primary my-5" onClick={fetchEmployeeApi}>
        Employee{" "}
      </button>

      <div className="container">
        <div>
          <thead>
            <tr>
              <th>Employee id</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Gender</th>
              <th>StartDate</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((value) => {
              const [...departmentArray] = value.departments;

              return (
                <>
                  <tr>
                    <td>{value.employeeId} </td>
                    <td>{value.name} </td>
                    <td>{value.salary} </td>
                    <td>{value.gender} </td>
                    <td>{value.startDate} </td>
                    <td>{value.departments}</td>
                  </tr>
                  <br />
                </>
              );
            })}
          </tbody>
        </div>
      </div>
    </div>
  );
}
