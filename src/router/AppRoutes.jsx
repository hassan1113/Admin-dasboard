import { Routes, Route } from 'react-router-dom';
import OriginalLayout from '../components/layout/Layout';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Analytics from '../pages/Analytics';

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<OriginalLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/analytics" element={<Analytics />} />
            </Route>
        </Routes>
    );
}


