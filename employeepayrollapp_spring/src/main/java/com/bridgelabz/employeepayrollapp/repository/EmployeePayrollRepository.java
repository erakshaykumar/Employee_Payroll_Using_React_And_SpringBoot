package com.bridgelabz.employeepayrollapp.repository;

import com.bridgelabz.employeepayrollapp.model.EmployeePayrollData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeePayrollRepository extends JpaRepository<EmployeePayrollData,Integer> {
    /**
     *
     * @param department
     * @return list of employees working in same department
     */
    @Query(value = "select  * from employee_payroll, employee_department where employee_id = id and department = :department",nativeQuery = true)
    List<EmployeePayrollData>  findEmployeesByDepartment(String department);
}
