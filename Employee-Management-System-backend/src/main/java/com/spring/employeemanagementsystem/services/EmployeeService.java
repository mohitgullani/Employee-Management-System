package com.spring.employeemanagementsystem.services;

import com.spring.employeemanagementsystem.entities.Employee;
import org.springframework.stereotype.Service;

import java.util.List;


public interface EmployeeService {

    void addEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

    Employee getEmployeeById(Long id);

    boolean updateEmployee(Long id, Employee employee);
}
