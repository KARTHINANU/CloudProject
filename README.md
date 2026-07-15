# ☁️ AWS Three-Tier Serverless Passenger Data Management System

## 📖 Project Overview

The **AWS Three-Tier Serverless Passenger Data Management System** is a cloud-native web application developed using **Amazon Web Services (AWS)** to manage passenger travel information efficiently. The project follows a **Three-Tier Serverless Architecture**, eliminating the need for traditional servers while ensuring scalability, security, and high availability.

The application enables users to add and retrieve passenger records through a responsive web interface. The frontend is hosted on **Amazon S3**, backend logic is executed using **AWS Lambda**, APIs are managed through **Amazon API Gateway**, passenger records are stored in **Amazon DynamoDB**, and global content delivery is provided using **Amazon CloudFront**.

This architecture minimizes operational costs by adopting a **pay-as-you-go** serverless model while delivering fast, reliable, and secure access to users worldwide.

---

# 🎯 Objectives

- Build a fully serverless cloud application.
- Manage passenger information efficiently.
- Eliminate server maintenance.
- Reduce operational costs using AWS services.
- Provide secure REST API communication.
- Store passenger records in a scalable NoSQL database.
- Deliver fast global access using CloudFront.
- Demonstrate a modern Three-Tier Cloud Architecture.

---

# ✨ Features

- Serverless Web Application
- Passenger Information Management
- Add Passenger Records
- View Passenger Records
- REST API using API Gateway
- AWS Lambda Backend
- DynamoDB NoSQL Database
- Static Website Hosting using Amazon S3
- Global Content Delivery using CloudFront
- IAM-Based Secure Access
- Automatic Scaling
- High Availability
- Cost-Effective Cloud Deployment

---

# 🏗️ Three-Tier Architecture

```
                User
                  │
                  ▼
        Amazon CloudFront (CDN)
                  │
                  ▼
        Amazon S3 Static Website
                  │
                  ▼
         Amazon API Gateway
                  │
                  ▼
            AWS Lambda
                  │
                  ▼
          Amazon DynamoDB
                  │
                  ▼
        Passenger Information
```

---

# ☁️ AWS Services Used

## 🔹 Amazon S3

Purpose:

- Hosts HTML, CSS and JavaScript files
- Static Website Hosting
- Highly durable storage
- Cost-effective storage solution

---

## 🔹 Amazon CloudFront

Purpose:

- Global Content Delivery Network (CDN)
- HTTPS Support
- Low latency content delivery
- Improved application performance

---

## 🔹 Amazon API Gateway

Purpose:

- REST API Management
- GET and POST Requests
- Secure communication
- Automatic API scaling

---

## 🔹 AWS Lambda

Purpose:

- Serverless Backend
- Executes business logic
- Handles passenger insertion
- Retrieves passenger data
- No server management required

---

## 🔹 Amazon DynamoDB

Purpose:

- NoSQL Database
- Stores passenger details
- High-speed read/write operations
- Automatic scaling

---

## 🔹 AWS IAM

Purpose:

- Role-based Access Control
- Secure AWS resource permissions
- Principle of Least Privilege
- Protects backend services

---

# 🔄 System Workflow

## Step 1

User opens the application using the CloudFront URL.

↓

## Step 2

CloudFront retrieves static website files from Amazon S3.

↓

## Step 3

The webpage loads in the user's browser.

↓

## Step 4

User enters:

- Passenger ID
- Passenger Name
- Source
- Destination

↓

## Step 5

Frontend sends HTTP request to Amazon API Gateway.

↓

## Step 6

API Gateway invokes AWS Lambda Function.

↓

## Step 7

Lambda processes the request.

↓

## Step 8

Passenger information is stored inside DynamoDB.

↓

## Step 9

API Gateway returns response.

↓

## Step 10

Frontend displays updated passenger records.

---

# 💻 Frontend

Developed using

- HTML5
- CSS3
- JavaScript

Functions

- Add Passenger
- View Passenger Records
- Responsive Interface
- API Communication

---

# ⚙️ Backend

Developed using

- AWS Lambda
- Python
- API Gateway

Responsibilities

- Receive API Requests
- Process Passenger Data
- Insert Records
- Retrieve Records
- Return JSON Response

---

# 💾 Database

Amazon DynamoDB stores passenger information.

Stored Fields

- Passenger ID
- Passenger Name
- Source
- Destination

Advantages

- Fully Managed
- NoSQL Database
- Automatic Scaling
- Millisecond Response Time

---

# 🔒 Security

Security mechanisms implemented

- IAM Roles
- IAM Policies
- HTTPS using CloudFront
- Origin Access Control (OAC)
- Secure API Gateway
- CORS Configuration
- Private S3 Bucket

---

# 📊 Advantages

- Fully Serverless
- Highly Scalable
- Cost Efficient
- High Availability
- Low Maintenance
- Fast Performance
- Secure Architecture
- Global Accessibility

---

# 📁 Project Structure

```
AWS-Three-Tier-Architecture/
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── styles.css
│
├── lambda/
│   ├── insertPassenger.py
│   └── getPassenger.py
│
├── database/
│   └── DynamoDB
│
├── screenshots/
│
├── architecture/
│
├── README.md
│
└── report.pdf
```

---

# ▶️ How to Run

## 1. Clone Repository

```bash
git clone https://github.com/KARTHINANU/CloudProject.git
```

---

## 2. Create DynamoDB Table

Create a table named

```
toursandtravelling
```

Partition Key

```
passengerId
```

---

## 3. Deploy Lambda Functions

Deploy

```
insertPassenger.py

getPassenger.py
```

Assign IAM Role with DynamoDB permissions.

---

## 4. Create API Gateway

Create REST API

Methods

- GET
- POST

Integrate with Lambda functions.

---

## 5. Upload Frontend

Upload

```
index.html

script.js

styles.css
```

to Amazon S3.

Enable Static Website Hosting.

---

## 6. Configure CloudFront

Create CloudFront Distribution.

Use the S3 Website Endpoint as Origin.

Enable HTTPS.

---

## 7. Open Website

Access the application using the CloudFront URL.

---

# 🚀 Future Improvements

- User Authentication using Amazon Cognito
- Online Ticket Booking
- Hotel Recommendation System
- Travel History Dashboard
- Email Notifications using Amazon SES
- CloudWatch Monitoring
- AWS SNS Notifications
- AI-based Travel Recommendation
- Multi-language Support
- Mobile Application

---

# 📚 Technologies Used

- Amazon Web Services (AWS)
- Amazon S3
- Amazon CloudFront
- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- AWS IAM
- Python
- HTML5
- CSS3
- JavaScript
- REST API

---

# 👨‍💻 Team Members

- **C. Karthikeya (23BIT0065)**
- **MVS Lalith (23BIT0423)**
- **A. Vishvesh (23BIT0001)**

**Guide:** Dr. Mohanraj Gopal

School of Computer Science Engineering and Information Systems (SCORE)

Vellore Institute of Technology (VIT)

---

# ⭐ If you found this project useful, don't forget to Star ⭐ the repository!
