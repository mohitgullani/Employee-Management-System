# Employee Management System

## Overview

This project is an Employee Management System that allows users to perform CRUD (Create, Read, Update, Delete) operations on employee records. The frontend is built using React.js and Tailwind CSS, while the backend is created using Spring Boot and Spring Data JPA.

## Features

- **CRUD Operations**: Users can perform CRUD operations on employee records, including creating new records, reading existing records, updating records, and deleting records.
- **Frontend UI**: The frontend user interface is built using React.js, providing a responsive and intuitive user experience.
- **Styling with Tailwind CSS**: Tailwind CSS is used for styling the frontend, offering a sleek and modern design.
- **Backend REST API**: The backend is built using Spring Boot, providing a robust and scalable RESTful API for interacting with the database.
- **Data Persistence**: Spring Data JPA is used for data persistence, allowing seamless integration with the database and efficient data retrieval.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Spring Boot, Spring Data JPA
- **Database**: H2 Database

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
   ```bash
   git clone [repository_url]
   ```

2. Navigate to the project directory.
   ```bash
   cd employee-management-system
   ```

3. Install dependencies for the frontend.
   ```bash
   cd employee-management-system-ui-react
   npm install
   ```

4. Run the frontend server.
   ```bash
   npm start
   ```

5. Install dependencies for the backend.
   ```bash
   cd ../backend
   mvn install
   ```

6. Run the backend server.
   ```bash
   mvn spring-boot:run
   ```

7. Access the application in your web browser at `http://localhost:3000`.
