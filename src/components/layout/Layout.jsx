import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';

export default function OriginalLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if screen is mobile on mount and when window resizes
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="d-flex flex-column vh-100">
            <Header toggleSidebar={toggleSidebar} isOpen={sidebarOpen} />
            <div className="d-flex flex-grow-1 overflow-hidden position-relative">
                {/* Sidebar*/}
                <div className={`sidebar-wrapper ${isMobile ? 'mobile' : 'desktop'} ${sidebarOpen ? 'open' : ''}`}>
                    <Sidebar isOpen={isMobile ? sidebarOpen : true} toggleSidebar={toggleSidebar} />
                </div>

                {/* Overlay for mobile sidebar*/}
                {isMobile && sidebarOpen && (
                    <div className="sidebar-overlay" onClick={toggleSidebar}></div>
                )}

                <main className="flex-grow-1 p-3 theme-bg-light overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}