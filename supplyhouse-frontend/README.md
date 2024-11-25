Customer Support Hours Management System
Overview
The Customer Support Hours Management System is a complete application designed to manage and display customer service hours for regular and special occasions. The system comprises a responsive frontend and a robust backend built with Spring Boot, providing REST APIs to handle service hours efficiently.
________________________________________
Features
Frontend
•	Dynamic Form: Add and manage special hours dynamically with a user-friendly interface.
•	Interactive Navbar: A dedicated button to open forms for adding special hours.
•	Responsive Design: Optimized for seamless use across various devices.
•	API Integration: Real-time interaction with backend APIs for displaying and managing hours.
Backend
•	REST APIs:
o	Fetch Regular Hours: GET /api/hours/regular
o	Fetch Special Hours: GET /api/hours/special
o	Add Special Hours: POST /api/hours/special
•	Validation:
o	Enforced input validation using @Valid and @NotNull.
•	Business Logic:
o	Ensures valid data, such as preventing opening times from exceeding closing times.
•	Error Handling:
o	Implements a global exception handler to manage errors and return meaningful responses.
________________________________________
Tech Stack
Frontend
•	HTML/CSS/JavaScript
•	React.js (or your chosen frontend framework/library)
Backend
•	Spring Boot
•	Hibernate/JPA
•	PostgreSQL (or your database)
________________________________________
Installation and Setup
Backend
1.	Clone the repository:
bash

git clone <repository_url>
2.	Navigate to the backend directory:
bash

cd backend
3.	Update the application.properties file with your database configuration:
properties

spring.datasource.url=jdbc:postgresql://<host>:<port>/<database>
spring.datasource.username=<username>
spring.datasource.password=<password>
4.	Build and run the application:
bash

mvn spring-boot:run
Frontend
1.	Navigate to the frontend directory:
bash

cd frontend
2.	Install dependencies:
bash

npm install
3.	Start the development server:
bash

npm start
________________________________________
API Endpoints
Regular Hours
•	Fetch Regular Hours
o	URL: /api/hours/regular
o	Method: GET
o	Response: JSON array of regular hours.
Special Hours
•	Fetch Special Hours
o	URL: /api/hours/special
o	Method: GET
o	Response: JSON array of special hours.
•	Add Special Hours
o	URL: /api/hours/special
o	Method: POST
o	Request Body:
json

{
  "date": "2024-12-25",
  "reason": "Holiday Hours",
  "openingTime": "10:00 AM",
  "closingTime": "02:00 PM"
}
o	Response: The added special hours object.
________________________________________
Validation and Error Handling
•	Validation: Enforces rules using annotations like @Valid and @NotNull.
•	Global Exception Handling:
o	ResourceNotFoundException: Returns 404 for missing resources.
o	IllegalArgumentException: Returns 400 for invalid inputs.
o	Generic 500 handler for unanticipated errors.
________________________________________
Testing
•	Backend:
o	Unit and integration tests using JUnit and Mockito.
o	Coverage includes service and controller layers.
•	Frontend:
o	Manual testing for functional and UI verification.

