# Decotechs Admin Dashboard

A responsive admin dashboard built with React, featuring user management, analytics, and a clean, professional UI.

## Features

### Core Features
- **Responsive Layout**: Clean and professional dashboard with sidebar navigation
- **Single Page Application**: Seamless navigation between modules without page reloads
- **Users Management (CRUD)**:
  - View users in a responsive table/card layout
  - Add new users with form validation
  - Edit existing user details
  - Delete users
  - State management with Redux Toolkit
  - Floating label design for improved form UX
- **Analytics Dashboard**:
  - KPI cards showing key metrics
  - Multiple chart types (Pie, Doughnut, Bar, etc.)
  - Responsive design for all screen sizes

### Technical Features
- Built with React and Vite for fast development
- Redux Toolkit for centralized state management
- React Router for client-side routing
- Bootstrap 5 for responsive design
- Chart.js with react-chartjs-2 for data visualization
- FontAwesome icons for UI elements
- Mobile-first responsive design

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository (if applicable)
# git clone https://your-repository-url.git

# Navigate to project directory
cd admin-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── assets/           # Static assets (images, etc.)
├── components/       # Reusable UI components
│   ├── layout/       # Layout components
│   ├── Header.jsx    # App header component
│   └── Sidebar.jsx   # Navigation sidebar component
├── pages/            # Page components
│   ├── Dashboard.jsx # Main dashboard page
│   ├── Users.jsx     # Users management page
│   └── Analytics.jsx # Analytics and charts page
├── redux/            # Redux state management
│   ├── slices/       # Redux slices (features)
│   └── store.js      # Redux store configuration
├── router/           # Routing configuration
├── styles/           # CSS and styling files
├── App.jsx           # Main application component
└── main.jsx         # Application entry point
```

## Future Improvements

- Implement Redux for global state management
- Add authentication and user roles
- Connect to a backend API for persistent data
- Add more interactive features and data visualizations
- Implement dark/light theme toggle

## License

This project is licensed under the MIT License - see the LICENSE file for details.
