package com.spring.employeemanagementsystem.services.impl;

import com.spring.employeemanagementsystem.entities.Employee;
import com.spring.employeemanagementsystem.repository.EmployeeRepository;
import com.spring.employeemanagementsystem.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public boolean deleteEmployee(Long id) {
        Employee employee = employeeRepository.findById(id).orElse(null);
        if(employee != null){
            employeeRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    @Override
    public boolean updateEmployee(Long id, Employee newEmployee) {
        Employee employee = employeeRepository.findById(id).orElse(null);
        if(employee != null){
            employee.setFirstName(newEmployee.getFirstName());
            employee.setLastName(newEmployee.getLastName());
            employee.setEmailId(newEmployee.getEmailId());
            employee.setCity(newEmployee.getCity());
            employee.setState(newEmployee.getState());
            employee.setCountry(newEmployee.getCountry());
            employeeRepository.save(employee);
            return true;
        }
        return false;
    }
}
