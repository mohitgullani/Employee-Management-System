import React from 'react'

const EmployeeTableHeader = () => {
  return (
    <thead className="bg-slate-100">
        <tr>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">First Name</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Last Name</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Email ID</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">City</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">State</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Country</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Actions</th>
        </tr>
    </thead>
  )
}

export default EmployeeTableHeader
