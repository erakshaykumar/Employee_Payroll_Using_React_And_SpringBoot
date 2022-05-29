/**
 * EmployeePayrollDTO.java
 */

package com.bridgelabz.employeepayrollapp.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.ToString;

import javax.validation.constraints.*;
import java.time.LocalDate;
import java.util.List;


public @ToString class  EmployeePayrollDTO {

    @Pattern(regexp = "^[A-Z]{1}[a-zA-Z\\s]{2,}$", message = "Employee name is Invalid")
    @NotEmpty(message = "Employee name cannot be null")
    public String name;
    @Min(value = 500, message = "min wage should be more than 500")
    public long salary;
    @Pattern(regexp = "male|female",message = "Gender needs to be male or female")
    public String gender;

//    @JsonFormat(pattern = "dd MM yyyy")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @NotNull(message = "start should not be empty")
    @PastOrPresent(message = "start date should be past or today")
    public LocalDate startDate;

    @NotBlank(message = "note should not be empty")
    public String note;

    @NotBlank(message = "profile pic should not be empty")
    public String profilePic;

    @NotNull(message = "department should not be empty")
    public List<String> departments;


}
