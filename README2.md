# 📱 Social Media App – Instagram Clone

A full-stack Social Media Application inspired by Instagram.  
This application allows users to register using OTP verification, login securely with JWT authentication, create posts with images, like and save posts, and follow other users.

Images are stored securely using ImageKit.io (Cloud Storage Provider).

---

## 🚀 Features

### 1️⃣ Authentication

- User Registration
- OTP-Based Registration (Email Verification)
- Login
- Logout (JWT Token Blacklisting)
- Secure Password Hashing using bcrypt
- Protected Routes using JWT

---

### 2️⃣ Posts

- Create Post (Image + Caption)
- View Feed (Posts from Following Users)
- Like / Unlike Post
- Save / Unsave Post
- Cloud Image Upload using ImageKit.io

---

### 3️⃣ Users

- Follow User
- Unfollow User
- View Followers List
- View Following List
- View User Profile

---

## 🛠️ Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Token)
- Password Hashing: bcrypt
- Cloud Storage: ImageKit.io
- Email Service: Nodemailer (for OTP verification)
- API Testing: Postman

---

## 🔐 Authentication Flow

### Registration

1. User enters email and password  
2. OTP is sent to the registered email  
3. User verifies OTP  
4. Account is created successfully  

### Login

1. User enters valid credentials  
2. JWT token is generated  
3. Token must be provided to access protected routes  

### Logout

- JWT token is blacklisted to prevent reuse  

---

## 📸 Post Flow

1. User uploads image  
2. Image is stored in ImageKit.io  
3. Post details are saved in MongoDB  
4. Followers can see the post in their feed  
5. Users can like and save posts  


