# JDM Cars App

This project is a simple microservice application that showcases JDM (Japanese Domestic Market) sports cars. It consists of a backend service built with Express, a frontend application built with React, and a database to store car data. The application is containerized using Docker and can be easily deployed using Docker Compose.

## Project Structure

```
jdm-cars-app
├── backend
│   ├── src
│   │   ├── app.js          # Entry point for the backend application
│   │   └── routes
│   │       └── cars.js     # Routes for handling car-related requests
│   ├── Dockerfile           # Dockerfile for building the backend image
│   └── package.json         # NPM configuration for backend dependencies
├── frontend
│   ├── public
│   │   └── index.html      # Main HTML file for the frontend application
│   ├── src
│   │   └── App.js          # Main React component for fetching and displaying car data
│   ├── Dockerfile           # Dockerfile for building the frontend image
│   └── package.json         # NPM configuration for frontend dependencies
├── database
│   └── init.sql            # SQL commands to initialize the database with sample data
├── docker-compose.yml       # Docker Compose configuration for the application
└── README.md                # Documentation for the project
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Setup

1. Clone the repository:

   ```
   git clone <repository-url>
   cd jdm-cars-app
   ```

2. Build and run the application using Docker Compose:

   ```
   docker-compose up -d
   ```

3. Access the frontend application at `http://localhost:3000`.

### Usage

- The backend service will be running on `http://localhost:5000`.
- The frontend will fetch car data from the backend and display it.

### Database Initialization

The database will be initialized with sample JDM car data using the SQL commands defined in `database/init.sql`.

## License

This project is licensed under the MIT License.
