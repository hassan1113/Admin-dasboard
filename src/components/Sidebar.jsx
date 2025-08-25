import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Sidebar({ isOpen, toggleSidebar }) {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();
    
    // Update active link based on current location
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);
    return (
        <div className={`sidebar bg-dark text-white min-vh-100 p-3 overflow-auto ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <div className="d-flex align-items-center justify-content-between mb-4">
                <span className="fs-4 fw-bold">Admin Dashboard</span>
                <button 
                    className="btn btn-sm btn-outline-light d-md-none" 
                    onClick={toggleSidebar}
                    aria-label="Close sidebar"
                >
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <nav className="nav flex-column">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        `nav-link py-2 position-relative overflow-hidden ${isActive ? 'text-white active-link' : 'text-white'}`
                    }
                    onClick={() => {
                        setActiveLink('/');
                        if (window.innerWidth < 768) toggleSidebar();
                    }}
                >
                    <i className="fas fa-tachometer-alt me-2"></i> Dashboard
                    {activeLink === '/' && <span className="active-indicator"></span>}
                </NavLink>
                <NavLink 
                    to="/users" 
                    className={({ isActive }) => 
                        `nav-link py-2 position-relative overflow-hidden ${isActive ? 'text-white active-link' : 'text-white'}`
                    }
                    onClick={() => {
                        setActiveLink('/users');
                        if (window.innerWidth < 768) toggleSidebar();
                    }}
                >
                    <i className="fas fa-users me-2"></i> Users
                    {activeLink === '/users' && <span className="active-indicator"></span>}
                </NavLink>
                <NavLink 
                    to="/analytics" 
                    className={({ isActive }) => 
                        `nav-link py-2 position-relative overflow-hidden ${isActive ? 'text-white active-link' : 'text-white'}`
                    }
                    onClick={() => {
                        setActiveLink('/analytics');
                        if (window.innerWidth < 768) toggleSidebar();
                    }}
                >
                    <i className="fas fa-chart-bar me-2"></i> Analytics
                    {activeLink === '/analytics' && <span className="active-indicator"></span>}
                </NavLink>
            </nav>
        </div>
    );
}