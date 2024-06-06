import React from 'react'
import { useNavigate } from 'react-router-dom';

const EmployeeRow = ({employee, deleteEmployee}) => {

  const navigate = useNavigate();

  const updateEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/updateEmployee/${id}`)
  }
  
  return (
    <tr key={employee.id} className="text-wrap">
        <td className="py-2 px-4 border-b border-gray-200">{employee.firstName}</td>
        <td className="py-2 px-4 border-b border-gray-200">{employee.lastName}</td>
        <td className="py-2 px-4 border-b border-gray-200">{employee.emailId}</td>
        <td className="py-2 px-4 border-b border-gray-200">{employee.city}</td>
        <td className="py-2 px-4 border-b border-gray-200">{employee.state}</td>
        <td className="py-2 px-4 border-b border-gray-200">{employee.country}</td>
        <td className="py-2 px-4 border-b border-gray-200">
            <a onClick={(e, id) => updateEmployee(e, employee.id)} className="text-blue-500 hover:underline hover:cursor-pointer">Edit</a>
            <a onClick={(e, id) => deleteEmployee(e, employee.id)} className="text-red-500 hover:underline hover:cursor-pointer ml-4">Delete</a>
        </td>
    </tr>
  )
}

export default EmployeeRow
