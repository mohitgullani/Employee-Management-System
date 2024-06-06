import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import EmployeeRow from './EmployeeRow';
import EmployeeTableHeader from './EmployeeTableHeader';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
  
  const [employees, setEmployees] = useState(null);
  const [loading, setLoading] = useState(true);

  const deleteEmployee = (e, id) => {
    EmployeeService.deleteEmployee(id)
        .then((response) => {
            setEmployees((allEmployees) => {
                return allEmployees.filter((employee) => employee.id !== id);
            });
        }).catch((error) => {
            console.log(error);
        })
  }
  
  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try{
            const response = await EmployeeService.getAllEmployees();
            setEmployees(response.data);
        }catch(error){
            console.log(error);
        }
        setLoading(false);
    }
    fetchData();
  }, [])
  
  return (
    <div className="bg-gray-100">
        <div className="container mx-auto mt-10 px-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Employee List</h2>
            <table className="min-w-full bg-white">
                <EmployeeTableHeader />
                {!loading && (
                <tbody>
                {employees.map((employee) => (
                    <EmployeeRow employee={employee} key={employee.id} deleteEmployee={deleteEmployee}/>
                ))}
                </tbody>)}
            </table>
            </div>
        </div>
    </div>
  )
}

export default EmployeeList
