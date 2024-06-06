package com.spring.employeemanagementsystem.controller;

import com.spring.employeemanagementsystem.entities.Employee;
import com.spring.employeemanagementsystem.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/employees")
public class EmployeeRestController {
    EmployeeService employeeService;

    @Autowired
    public EmployeeRestController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @PostMapping
    public ResponseEntity<String> addEmployee(@RequestBody Employee employee){
        employeeService.addEmployee(employee);
        return new ResponseEntity<>("Employee Added Successfully", HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id){
        boolean deleted = employeeService.deleteEmployee(id);
        if(deleted){
            return new ResponseEntity<>("Employee Deleted Successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("Employee Not Found", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = employeeService.getEmployeeById(id);
        if(employee != null){
            return new ResponseEntity<>(employee, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateEmployee(@PathVariable Long id, @RequestBody Employee employee){
        boolean updated = employeeService.updateEmployee(id, employee);
        if(updated){
            return new ResponseEntity<>("Employee updated", HttpStatus.OK);
        }
        return new ResponseEntity<>("Employee Not Found", HttpStatus.NOT_FOUND);
    }
}
