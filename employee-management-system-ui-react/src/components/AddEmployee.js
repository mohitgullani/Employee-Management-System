import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    city: "",
    state: "",
    country: ""
  });

  const clear = (e) => {
    e.preventDefault();
    setEmployee({
        firstName: "",
        lastName: "",
        emailId: "",
        city: "",
        state: "",
        country: ""
      })
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({
        ...employee,
        [e.target.name]: value
    })
  };

  const navigate = useNavigate();

  const addEmployee = (e) => {
    e.preventDefault();
    EmployeeService.addEmployee(employee)
        .then((response) => {
            navigate("/employeeList")
        }).catch((error) => {
            console.log(error);
        })
  }

  return (
    <div className="container mx-auto mt-10">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Employee</h2>
            <div className="mb-4">
                <label for="firstName" className="block text-gray-700">First Name</label>
                <input type="text" name="firstName" value={employee.firstName} onChange={(e) => handleChange(e)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter first name" />
            </div>
            <div className="mb-4">
                <label for="lastName" className="block text-gray-700">Last Name</label>
                <input type="text" name="lastName" value={employee.lastName} onChange={(e) => handleChange(e)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter last name" />
            </div>
            <div className="mb-4">
                <label for="email" className="block text-gray-700">Email ID</label>
                <input type="email" name="emailId" value={employee.emailId} onChange={(e) => handleChange(e)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter email ID" />
            </div>
            <div className="mb-4">
                <label for="city" className="block text-gray-700">City</label>
                <input type="text" name="city" value={employee.city} onChange={(e) => handleChange(e)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter city" />
            </div>
            <div className="mb-4">
                <label for="state" className="block text-gray-700">State</label>
                <input type="text" name="state" value={employee.state} onChange={(e) => handleChange(e)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter state" />
            </div>
            <div className="mb-4">
                <label for="country" className="block text-gray-700">Country</label>
                <input type="text" name="country" value={employee.country} onChange={(e) => handleChange(e)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter country" />
            </div>
            <div className="mt-6 flex space-x-4">
                <button type="submit" onClick={(e) => addEmployee(e)} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Add Employee</button>
                <button type="reset" onClick={(e) => clear(e)} className="w-full bg-red-400 text-white py-2 px-4 rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">Clear</button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee
