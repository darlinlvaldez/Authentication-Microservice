# Authentication Microservice

Authentication microservice developed during my internship as part of a larger microservices-based enterprise system. This service is responsible for authenticating guest users, validating credentials, managing secure sessions through JSON Web Tokens (JWT), and providing a web interface for login.

> **Note:** This repository contains only the authentication microservice that I developed and maintained. It was originally integrated into a larger application composed of multiple microservices.

---

## Features

- User authentication
- Secure password hashing with BCrypt
- JWT-based authentication
- Protected API routes using middleware
- Form validation
- MySQL database integration
- REST API architecture
- React-based login interface
- Modular backend structure following separation of concerns

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- CSS

### Backend

- Node.js
- Express.js
- MySQL
- JWT (JSON Web Token)
- BCrypt
- Express Middleware

---

## Project Structure

```
authentication-microservice/
│
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── validations/
│   ├── database/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── hooks/
│   ├── config/
│   └── assets/
│
└── README.md
```

---

## Authentication Flow

1. User submits login credentials.
2. Backend validates the request.
3. Credentials are verified against the database.
4. Password is compared using BCrypt.
5. A JWT token is generated upon successful authentication.
6. Protected routes validate the token using authentication middleware.
7. The frontend stores the session and grants access to authorized resources.

---

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/authentication-microservice.git
```

### Backend

```bash
cd backend

npm install

npm run dev
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend directory.

Example:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=database_name
DB_USER=root
DB_PASSWORD=password

JWT_SECRET=your_secret_key
```

---

## Security

This project implements several security practices, including:

- Password hashing using BCrypt
- JWT authentication
- Protected endpoints
- Environment variables for sensitive configuration
- Request validation before processing

---

## Learning Outcomes

During the development of this project I gained practical experience with:

- Building RESTful APIs
- Authentication and authorization
- JWT implementation
- Password encryption
- Middleware design
- Database integration with MySQL
- React frontend integration
- Client-server communication
- Modular software architecture

---

## Disclaimer

This project was originally developed during my internship as part of an enterprise microservices ecosystem.

Only the authentication microservice is included in this repository. Any confidential information, company-specific resources, credentials, and proprietary code have been removed before publication.

---

## Author

**Darlin Manuel Luis Valdez**

Full Stack Web Developer

LinkedIn:
https://www.linkedin.com/in/darlin-l-valdez-4a85b5400
