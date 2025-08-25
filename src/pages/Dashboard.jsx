import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Pie, Doughnut, Bar } from 'react-chartjs-2';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

export default function Dashboard() {
    const [date, setDate] = useState(new Date());
    
    return (
        <div className="row g-3">
            <div className="col-6 col-lg-3">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className="me-3">
                                <i className="fas fa-users fa-3x text-primary"></i>
                            </div>
                            <div>
                                <h6 className="fw-semibold text-muted mb-0">Total Users</h6>
                                <div className="fs-3">1,240</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className="me-3">
                                <i className="fas fa-desktop fa-3x text-primary"></i>
                            </div>
                            <div className="mt-auto">
                                <h6 className="fw-semibold mb-0 text-muted">Active Sessions</h6>
                                <div className="fs-3">312</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className="me-3">
                                <i className="fas fa-tasks fa-3x text-primary"></i>
                            </div>
                            <div className="mt-auto">
                                <h6 className="fw-semibold mb-0 text-muted">Tasks</h6>
                                <div className="fs-3">58</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className="me-3">
                                <i className="fas fa-chart-line fa-3x text-primary"></i>
                            </div>
                            <div className="mt-auto">
                                <h6 className="fw-semibold mb-0 text-muted">KPI</h6>
                                <div className="fs-3">92%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Charts Row */}
            <div className="col-12">
                <div className="row g-3">
                    {/* Pie Chart */}
                    <div className="col-12 col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header">
                                <i className="fas fa-users me-2"></i> User Distribution
                            </div>
                            <div className="card-body" style={{ height: 300, padding: '1rem' }}>
                                <Pie 
                                    data={{
                                        labels: ['Admins', 'Editors', 'Users'],
                                        datasets: [
                                            {
                                                data: [15, 45, 180],
                                                backgroundColor: [
                                                    'rgba(41, 128, 185, 0.8)',
                                                    'rgba(109, 213, 250, 0.8)',
                                                    'rgba(41, 128, 185, 0.4)'
                                                ],
                                                borderColor: [
                                                    'rgba(41, 128, 185, 1)',
                                                    'rgba(109, 213, 250, 1)',
                                                    'rgba(41, 128, 185, 0.6)'
                                                ],
                                                borderWidth: 1,
                                            },
                                        ],
                                    }}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        plugins: {
                                            legend: {
                                                position: 'bottom',
                                            },
                                            title: {
                                                display: false,
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Doughnut Chart */}
                    <div className="col-12 col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header">
                                <i className="fas fa-tasks me-2"></i> Task Status
                            </div>
                            <div className="card-body" style={{ height: 300, padding: '1rem' }}>
                                <Doughnut 
                                    data={{
                                        labels: ['Completed Tasks', 'Pending Tasks', 'In Progress'],
                                        datasets: [
                                            {
                                                data: [35, 15, 8],
                                                backgroundColor: [
                                                    'rgba(46, 204, 113, 0.8)',
                                                    'rgba(231, 76, 60, 0.8)',
                                                    'rgba(241, 196, 15, 0.8)'
                                                ],
                                                borderColor: [
                                                    'rgba(46, 204, 113, 1)',
                                                    'rgba(231, 76, 60, 1)',
                                                    'rgba(241, 196, 15, 1)'
                                                ],
                                                borderWidth: 1,
                                            },
                                        ],
                                    }}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        plugins: {
                                            legend: {
                                                position: 'bottom',
                                            },
                                            title: {
                                                display: false,
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* New Row for Stacked Bar Chart and Calendar */}
            <div className="col-12">
                <div className="row g-3">
                    {/* Stacked Bar Chart */}
                    <div className="col-12 col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header">
                                <i className="fas fa-chart-bar me-2"></i> Tasks Overview
                            </div>
                            <div className="card-body" style={{ height: 300, padding: '1rem' }}>
                                <Bar
                                    data={{
                                        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                                        datasets: [
                                            {
                                                label: 'Completed',
                                                data: [12, 15, 18, 14],
                                                backgroundColor: 'rgba(46, 204, 113, 0.8)',
                                                borderColor: 'rgba(46, 204, 113, 1)',
                                                borderWidth: 1,
                                            },
                                            {
                                                label: 'Pending',
                                                data: [8, 5, 7, 9],
                                                backgroundColor: 'rgba(231, 76, 60, 0.8)',
                                                borderColor: 'rgba(231, 76, 60, 1)',
                                                borderWidth: 1,
                                            },
                                        ],
                                    }}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        scales: {
                                            x: {
                                                stacked: true,
                                            },
                                            y: {
                                                stacked: true,
                                                beginAtZero: true,
                                            },
                                        },
                                        plugins: {
                                            legend: {
                                                position: 'bottom',
                                            },
                                            title: {
                                                display: false,
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Calendar */}
                    <div className="col-12 col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header">
                                <i className="fas fa-calendar me-2"></i> Calendar
                            </div>
                            <div className="card-body" style={{ height: 300, padding: '1rem', overflow: 'auto' }}>
                                <Calendar
                                    onChange={setDate}
                                    value={date}
                                    className="w-100 border-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}