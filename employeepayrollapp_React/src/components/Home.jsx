import React, { useEffect, useState } from "react";
import "./Home.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
// import EmployeePayrollForm from "./EmployeePayrollForm";
import delete1 from "../assets/icons/delete.svg";
import edit1 from "../assets/icons/edit.svg";
// import { FaRupeeSign } from "react-icons/fa";
import EmployeePayrollService from "../service/EmployeePayrollService";

export default function Home(props) {
  let [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployeeApi();
  });

  let fetchEmployeeApi = () => {
    EmployeePayrollService.getAllEmployee().then((response) => {
      const employee = response.data.data;
      setEmployees(employee);
    });
  };

  let deleteEmployee = (id) => {
    const value = parseInt(id);
    EmployeePayrollService.delete(value);
    // window.location.assign(`http://localhost:3000/`);
    fetchEmployeeApi();
  };

  let updateEmployee = (employeeId) => {
    console.log(employeeId);
    // this.props.history.push("/form/:employeeId",{ employeeId});
    props.history.push({
      pathname: "/payroll-form/",
      state: employeeId,
    });
    // console.log(`${employeeId}`)
    console.log(employeeId);
  };

  return (
    <>
      <header className="header-content header">
        <div className="logo-content">
          <img src="/formImages/logo.PNG" alt="myLogo" />
          <div>
            <span className="emp-text">EMPLOYEE</span>
            <br />
            <span className="emp-text emp-payroll">PAYROLL</span>
          </div>
        </div>
      </header>

      <div className="main-content">
        <div className="header-content">
          <div className="emp-detail-text">
            Employee Details
            <div className="emp-count">{employees.length}</div>
          </div>

          <Link to="/payroll-form" className="add-button">
            {" "}
            + Add User
          </Link>
        </div>{" "}
        {/* header content */}
      </div>

      <div className="table-main">
        <table id="table-display" className="table">
          <thead>
            <tr>
              <th>Emp Id</th>
              <th>Profile image</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Start Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              return (
                <tr key={employee.employeeId}>
                  <td>{employee.employeeId}</td>
                  <td>
                    <img src={employee.profilePic} alt="" />
                  </td>
                  <td>{employee.name} </td>
                  <td>{employee.gender} </td>
                  <td>
                    {employee.departments.map((dep,i) => (
                      <div className="dept-label">{dep}</div>
                    ))}
                  </td>
                  <td>{employee.salary} </td>
                  <td>{employee.startDate} </td>
                  <td>
                    <img
                      name={employee.employeeId}
                      src={delete1}
                      alt="delete"
                      onClick={() => deleteEmployee(employee.employeeId)}
                    />
                    <img
                      name={employee.employeeId}
                      src={edit1}
                      alt="edit"
                      onClick={() => updateEmployee(employee.employeeId)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
