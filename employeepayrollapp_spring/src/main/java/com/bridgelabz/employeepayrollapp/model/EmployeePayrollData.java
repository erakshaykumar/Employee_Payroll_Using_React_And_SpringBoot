/**
 * EmployeePayrollData.java
 */
package com.bridgelabz.employeepayrollapp.model;

import com.bridgelabz.employeepayrollapp.dto.EmployeePayrollDTO;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "employee_payroll")
@Data
public class EmployeePayrollData {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "employee_id")
    private int employeeId;
    @Column(name = "name")
    private String name;
    private long salary;
    private String gender;
    @Column(name = "start_date")
    private LocalDate startDate;
    private String note;
    @Column(name = "profile_pic")
    private String profilePic;
    @ElementCollection//1 to many relation ship
    @CollectionTable(name = "employee_department",
                     joinColumns = @JoinColumn(name = "id"))
    @Column(name = "department")
    private List<String> departments;




    public EmployeePayrollData(){}

    public EmployeePayrollData( EmployeePayrollDTO employeePayrollDTO){
       this.updateEmployeePayrollData(employeePayrollDTO);
    }

     public void updateEmployeePayrollData(EmployeePayrollDTO employeePayrollDTO) {
        this.name=employeePayrollDTO.name;
        this.salary=employeePayrollDTO.salary;
        this.gender=employeePayrollDTO.gender;
        this.startDate=employeePayrollDTO.startDate;
        this.note=employeePayrollDTO.note;
        this.profilePic=employeePayrollDTO.profilePic;
        this.departments=employeePayrollDTO.departments;
    }

}
