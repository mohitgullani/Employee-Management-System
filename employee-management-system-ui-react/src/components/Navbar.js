import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold hover:cursor-pointer">
          Employee Management System
        </div>
        <button onClick={(e) => navigate("/addEmployee")} className="bg-gray-300 text-slate-900 hover:bg-gray-400 font-bold py-2 px-4 rounded">
          Add Employee
        </button>
      </div>
    </nav>
  )
}

export default Navbar
