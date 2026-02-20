# 🚀 AI-Powered Resume Builder

A modern, full-stack resume builder application with AI-powered content enhancement, multiple ATS-optimized templates, and seamless export capabilities. Build professional resumes in minutes with intelligent assistance and beautiful designs.

## ✨ Features

- **🤖 AI Content Enhancement** - Intelligent AI-powered professional summary and job description enhancement using Google Gemini
- **🎨 4 Professional Templates** - Choose from Classic, Modern, Minimal, and Minimal with Image templates
- **🎯 ATS-Optimized** - All templates are optimized for Applicant Tracking Systems
- **📸 Background Removal** - One-click photo background removal from profile images using ImageKit
- **🎨 Customizable Colors** - Personalize your resume with custom accent colors
- **📱 Responsive Design** - Works seamlessly across all devices
- **💾 Auto-Save** - Local storage backup to prevent data loss
- **📤 Export & Share** - Download as PDF or share via direct link
- **🔐 Secure Authentication** - JWT-based authentication with bcrypt password hashing
- **📊 Dashboard** - Manage multiple resumes from a centralized dashboard

## 🎯 Resume Sections Supported

- Personal Information (with optional profile photo)
- Professional Summary (AI-enhanced)
- Professional Experience (AI-enhanced job descriptions)
- Education
- Projects
- Skills
- Languages

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern UI library
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **TailwindCSS 4** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcrypt.js** - Password hashing
- **Google Gemini API** - AI content enhancement
- **ImageKit** - Image management and background removal
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Google Gemini API Key** (for AI content enhancement)
- **ImageKit Account** (for image handling and background removal)

## 🚀 Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd resume-builder
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
FRONTEND_URL=http://localhost:5173

# Google Gemini Configuration
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL_NAME=gemini-pro

# ImageKit Configuration
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` directory (if needed):

```env
VITE_API_URL=http://localhost:3000
```

Update the API configuration in `frontend/src/configs/api.js` if necessary.

## 🏃 Running the Application

### Start Backend Server

```bash
cd backend
npm run server    # Development with nodemon
# or
npm start        # Production
```

The backend server will start on `http://localhost:3000`

### Start Frontend Development Server

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173`

## 📁 Project Structure

```
resume-builder/
├── backend/
│   ├── configs/          # Configuration files (DB, Gemini, ImageKit, Multer)
│   ├── controllers/      # Request handlers
│   ├── middlewares/      # Authentication middleware
│   ├── models/          # MongoDB models (User, Resume)
│   ├── routes/          # API routes
│   ├── server.js        # Express server setup
│   └── package.json
│
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── app/         # Redux store and slices
│   │   ├── assets/      # Images and resume templates
│   │   ├── components/  # Reusable React components
│   │   ├── configs/     # API configuration
│   │   ├── pages/       # Page components
│   │   ├── App.jsx      # Main App component
│   │   └── main.jsx     # Entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## 🎨 Available Resume Templates

1. **Classic Template** - Traditional professional layout
2. **Modern Template** - Contemporary design with bold accents
3. **Minimal Template** - Clean and minimalist approach
4. **Minimal Image Template** - Minimal design with profile photo support

## 🔐 API Endpoints

### User Routes

- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users/data` - Get authenticated user data

### Resume Routes

- `POST /api/resumes/create` - Create new resume
- `GET /api/resumes/get/:id` - Get specific resume
- `GET /api/resumes/all` - Get all user resumes
- `PUT /api/resumes/update/:id` - Update resume
- `DELETE /api/resumes/delete/:id` - Delete resume
- `PATCH /api/resumes/toggle-public/:id` - Toggle resume public status

### AI Routes (Gemini)

- `POST /api/openai/enhance-professional-summary` - Enhance professional summary with AI
- `POST /api/openai/enhance-job-description` - Enhance job description with AI
- `POST /api/openai/upload-resume` - Extract and parse resume data with AI

## 🌐 Demo

**Live Demo:** [Add your demo link here]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 🙏 Acknowledgments

- Google Gemini for AI content enhancement
- ImageKit for image processing and background removal
- TailwindCSS for the beautiful UI components
- The open-source community

---
