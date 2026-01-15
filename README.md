# Express + MongoDB (Docker Compose)

This project demonstrates a containerized full-stack environment using Docker Compose. It features an Express.js backend seamlessly connected to a MongoDB database, highlighting multi-container orchestration and persistent data management.



---

## 🚀 Overview
The goal of this project is to simplify the deployment of a Node.js backend and a NoSQL database. By using Docker Compose, we can spin up the entire stack with a single command, ensuring the backend and database can communicate out-of-the-box.

### 🛠 Technologies Used
* **Node.js (Express.js)**: The web server framework.
* **MongoDB**: The NoSQL database for data storage.
* **Mongoose**: The ODM for MongoDB and Node.js.
* **Docker & Docker Compose**: For container orchestration and networking.

---

## 🏗 Architecture
The application is split into two isolated services that share a private virtual network:
1. **App Container**: Runs the Express server and handles business logic.
2. **DB Container**: Runs the MongoDB instance.
* **Orchestration**: Docker Compose manages the startup order and networking, allowing the App to reach the DB using the service name `mongodb`.

## 📝 Steps Followed

### 1. Create Express Application
A server was built using Express.js. It uses **Mongoose** to connect to the database via a connection string (e.g., `mongodb://mongodb:27017/mydatabase`).

### 2. Dockerize the Backend
A `Dockerfile` was created using a Node.js base image. It:
* Installs dependencies via `npm install`.
* Copies the source code.
* Exposes **Port 3000**.

### 3. Configure Docker Compose
The `docker-compose.yml` file was configured to:
* Define the `web` service (our Express app).
* Define the `mongodb` service (using the official Mongo image).
* Map host ports to container ports.
* Set environment variables for database connectivity.

## ⚙️ How to Run

### 1. Launch the Stack
Run the following command to build the images and start the containers in one go:
```bash
docker-compose up --build
```
### 2. Access the Application
Once the containers are healthy, access the services at:
* Web App: http://localhost:3000
* MongoDB: localhost:27017 (Internal access only or mapped for GUI tools)

## ✅ Outcome & Key Learnings
The Express application successfully communicates with MongoDB through the internal Docker network.

### Key Learnings
* Multi-container Orchestration: Managing two different technologies as a single unit.
* Docker Compose Workflows: Using up and down to manage environment lifecycle.
* Networking: Connecting services using container names instead of hardcoded IP addresses.
* Persistence: Understanding how to containerize a full-stack setup for rapid development.
  
