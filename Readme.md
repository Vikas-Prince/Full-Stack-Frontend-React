# Food Delivery Frontend (React.js)

## 📌 Project Overview
This repository contains the **frontend application** for a real-time **enterprise-level food delivery system**, developed using **React.js**. The application functions similarly to **Zomato** and **Swiggy**, providing an interactive and seamless user experience. It is a crucial part of a **modular MERN stack infrastructure**, where each layer (frontend, backend, and database) is managed separately in different repositories and deployed following enterprise standards.

## 🎯 Features
- **Restaurant Listings & Menu Display**
- **Search & Filter Functionality**
- **Cart & Order Processing**
- **Optimized UI for Performance & Scalability**
- **Enterprise-Grade Deployment & CI/CD Pipeline**

## 🏗️ Enterprise Deployment Approach
To ensure **scalability, automation, and security**, the frontend is deployed following **modern DevOps methodologies**:

- **Dockerized Application**: A Dockerfile is included to containerize the frontend for seamless deployment.
- **CI/CD Pipeline (Jenkins)**:
  - Automated testing
  - **SonarQube** for code quality checks
  - **Trivy** for security scanning
  - Build & push images to **Docker Hub**
  - Automated update of GitOps repository
  - Email notifications with **build status & reports**
- **GitOps Deployment (ArgoCD)**:
  - The application is deployed on **AWS EKS (Kubernetes Cluster)**
  - Fully automated sync and rollback strategies

## 🔗 Related Repositories
This frontend interacts with different layers of the MERN stack, deployed independently:

- **MongoDB Sharded Cluster Deployment**: [mongodb-sharded-cluster-on-k8s](https://github.com/yourusername/mongodb-sharded-cluster-on-k8s)
- **Backend API (Node.js & Express)**: [food-delivery-backend-Node](https://github.com/yourusername/food-delivery-backend-Node)
- **GitOps Deployment (Kubernetes & ArgoCD)**: [Food-delivery-GitOps](https://github.com/yourusername/Food-delivery-GitOps)

## 📂 Project Structure
This repository contains:

- **React.js Source Code**: Developed using React with modular component architecture.
- **Dockerfile**: To containerize the frontend application for scalable deployment.
- **Jenkinsfile**: CI pipeline for automated testing, code quality checks, security scans, and image pushing.
- **Kubernetes Manifests**: Managed in the GitOps repository for automated deployment via ArgoCD.

## 🚀 Get Started
If you're exploring this repository, you now know that it represents the **React.js frontend** of a **fully modular full-stack food delivery application** that is deployed using **modern DevOps tools and best practices**.

### Accessing the Application
After deployment, the frontend interacts with the backend using API endpoints exposed via a **LoadBalancer URL**. Ensure the backend is deployed and running before testing the frontend functionalities.

For contributions, feature requests, or issues, feel free to raise a **GitHub Issue** or contribute via **Pull Requests**. 🚀
