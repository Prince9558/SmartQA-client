# SmartQA React Client

A modern, responsive real-time Q&A platform built with React and Socket.IO.

## Features

### 🏠 **Dashboard (Landing Page)**
- Beautiful, responsive landing page with detailed information about SmartQA
- Hero section with call-to-action buttons
- Features section highlighting platform capabilities
- "How It Works" section with step-by-step guide
- Modern gradient design with animations

### 🔐 **Authentication System**
- **Login Page**: Clean, modern login form with email/password
- **Register Page**: Comprehensive registration form with validation
- Social login options (Google)
- Form validation and error handling
- Loading states and user feedback

### 🎯 **Core Q&A Features**
- **Create Room**: Host new Q&A sessions
- **Join Room**: Participate in existing sessions with room codes
- **Real-time Chat**: Live Q&A interactions
- **Responsive Design**: Works on all devices

### 🎨 **Design & UX**
- Modern, gradient-based design
- Fully responsive layout
- Smooth animations and transitions
- Clean, professional UI
- Bootstrap 5 integration

## Pages Structure

1. **`/` (Dashboard)** - Landing page with platform information
2. **`/login`** - User authentication
3. **`/register`** - User registration
4. **`/home`** - Main dashboard (after login)
5. **`/create`** - Create new Q&A room
6. **`/join`** - Join existing room
7. **`/room/:code`** - Active Q&A session

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Technology Stack

- **Frontend**: React 19, Vite
- **Styling**: Bootstrap 5, Custom CSS
- **Routing**: React Router DOM
- **Real-time**: Socket.IO Client
- **HTTP Client**: Axios

## Key Components

### Dashboard.jsx
The main landing page featuring:
- Hero section with animated elements
- Feature cards with hover effects
- Step-by-step guide
- Call-to-action sections

### Login.jsx & Register.jsx
Modern authentication forms with:
- Form validation
- Loading states
- Error handling
- Social login options
- Responsive design

### Navbar.jsx
Dynamic navigation component that:
- Shows different options for logged-in vs guest users
- Handles logout functionality
- Responsive mobile menu

## CSS Features

The `dashboard.css` file includes:
- Modern gradient backgrounds
- Smooth animations and transitions
- Responsive grid layouts
- Hover effects and micro-interactions
- Mobile-first design approach
- Custom form styling
- Loading animations

## User Flow

1. **New User**: Visits `/` → sees Dashboard → clicks "Get Started" → Register/Login
2. **Returning User**: Visits `/` → sees Dashboard → clicks "Login" → enters credentials
3. **Logged-in User**: Automatically redirected to `/home` → can create/join rooms

## Development Notes

- Uses localStorage for demo authentication
- All forms include proper validation
- Responsive design tested on multiple screen sizes
- Clean, maintainable code structure
- Bootstrap classes combined with custom CSS for optimal styling

## Future Enhancements

- Backend API integration
- Real user authentication
- Database integration
- Advanced room features
- User profiles and settings
- Analytics and reporting
