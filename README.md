# Bingo Game

![Screenshot 2024-09-12 at 3 06 46 PM](https://github.com/user-attachments/assets/8801a6e5-7da3-4d62-9d55-c1d959f442af)


## Table of Contents
1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Running the App](#running-the-app)
4. [Tech Stack](#tech-stack)
5. [Notes](#notes)
6. [TODO](#todo)

## Requirements
- Docker ~20
- Docker Compose ~2

## Installation
1. **Install Docker:**
   - Follow the instructions on the [official Docker website](https://docs.docker.com/get-docker/) to install Docker for your operating system.

2. **Install Docker Compose:**
   - Docker Compose usually comes bundled with Docker Desktop for Windows and macOS. For Linux and other installations, follow the instructions [here](https://docs.docker.com/compose/install/).

## Running the App
1. Clone the repository:
   ```bash
   git clone git@github.com:suaviaparicio/bingo-final.git
   cd bingo-final
   ```

2. Start the app stack:
   ```bash
   ./start.sh
   ```
   This script initializes Docker Compose to start the application stack.

3. Access the Application:
   - Open a web browser and navigate to [http://localhost:3000/](http://localhost:3000/) to use the application.

4. Clean up:
   - To clean up the app stack, run:
   ```bash
   docker-compose down -v
   ```

## Tech Stack
- **Backend:**
  - Built using Node.js version 21.7
  - Express.js 4.19
  - MySQL 8.0

- **Frontend:**
  - Node.js version 21.7
  - React.js 18.2
  - Bootstrap 6 


- **Database:**
  - MySQL 8.0

- **Containerization:**
  - Docker 20.10
  - Docker Compose 2.23

## Bingo
- The application stack includes services for frontend, backend, and MySQL database, managed by Docker Compose.
- Ensure that the ports required by Docker are not being used by other applications on your machine.
- For troubleshooting Docker and Docker Compose issues, refer to the [official Docker documentation](https://docs.docker.com/).
- .env file is commonly not uploaded but for the sake of this challenge it is.

## TODO
1. **Frontend Improvements:**
   - Implement SEO configurations to improve search engine visibility.
   - Improve usability by refining UI/UX elements.
   - Add a dark/light mode toggle for better user experience.
   - Implement multiple language support for a global audience appeal.

2. **Security Enhancements:**
   - Implement TLS certificates for secure communication.
   - Add user authentication and authorization mechanisms.
   - Regularly update dependencies to patch known vulnerabilities (configure Dependabot pipeline).

3. **Performance Improvements:**
   - Utilize a CDN like CloudFront to serve static assets.
   - Optimize images and other static resources.
   - Implement caching strategies for API responses.

4. **Scalability and Deployment:**
   - Deploy the application using a container orchestration service like Kubernetes or ECS.
   - Set up an Application Load Balancer (ALB) for handling incoming traffic.

5. **Infrastructure Enhancements:**
   - Store static assets in a S3 bucket.
   - Configure autoscaling policies to handle varying loads.
   - Set up monitoring and logging.

6. **Testing and CI/CD:**
   - Implement unit and integration tests.
   - Set up a CI/CD pipeline using tools like Jenkins, GitHub Actions, or GitLab CI.
