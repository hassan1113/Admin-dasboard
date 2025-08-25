import { Line, Bar, Bubble, PolarArea, Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    RadialLinearScale
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    RadialLinearScale
);

// Line Chart Data
const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'Visits',
            data: [120, 90, 140, 100, 180, 160, 200],
            borderColor: '#0d6efd',
            backgroundColor: 'rgba(13,110,253,.15)',
            tension: 0.35,
            fill: true
        }
    ]
};

// Bar Chart Data
const barData = {
    labels: ['Chrome', 'Safari', 'Edge', 'Firefox'],
    datasets: [
        {
            label: 'Users',
            data: [62, 21, 11, 6],
            backgroundColor: ['#0d6efd', '#6f42c1', '#20c997', '#fd7e14']
        }
        
    ]
};

// Bubble Chart Data
const bubbleData = {
    datasets: [
        {
            label: 'Engagement',
            data: [
                { x: 10, y: 20, r: 12 },
                { x: 15, y: 10, r: 18 },
                { x: 25, y: 30, r: 10 },
                { x: 40, y: 20, r: 15 }
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        }
    ]
};

// Polar Area Chart Data
const polarData = {
    labels: ['North', 'South', 'East', 'West'],
    datasets: [
        {
            label: 'Sales',
            data: [11, 16, 7, 14],
            backgroundColor: ['#0d6efd', '#20c997', '#ffc107', '#dc3545']
        }
    ]
};

// Radar Chart Data
const radarData = {
    labels: ['Speed', 'Agility', 'Strength', 'Stamina', 'Skill'],
    datasets: [
        {
            label: 'Team A',
            data: [65, 59, 90, 81, 56],
            backgroundColor: 'rgba(13,110,253,0.2)',
            borderColor: '#0d6efd'
        },
        {
            label: 'Team B',
            data: [28, 48, 40, 19, 96],
            backgroundColor: 'rgba(220,53,69,0.2)',
            borderColor: '#dc3545'
        }
    ]
};

// Chart Options
const options = {
    responsive: true,
    plugins: { legend: { position: 'top' }, title: { display: false } },
    scales: { y: { beginAtZero: true } }
};

export default function Analytics() {
    return (
        <div>
            <h5 className="mb-3">
                <i className="fas fa-chart-line me-2"></i>Analytics Dashboard
            </h5>
            <div className="row g-3">
                {/* Line Chart */}
                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm analytics-card">
                        <div className="card-body">
                            <h6 className="mb-3"><i className="fas fa-chart-line me-2"></i>Weekly Visits</h6>
                            <Line data={lineData} options={options} />
                        </div>
                    </div>
                </div>

                {/* Bar Chart */}
                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm analytics-card">
                        <div className="card-body">
                            <h6 className="mb-3"><i className="fas fa-chart-bar me-2"></i>Browser Share</h6>
                            <Bar data={barData} options={options} />
                        </div>
                    </div>
                </div>

                {/* Polar Area Chart */}
                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm analytics-card">
                        <div className="card-body">
                            <h6 className="mb-3"><i className="fas fa-bullseye me-2"></i>Sales Distribution</h6>
                            <PolarArea data={polarData} options={options} />
                        </div>
                    </div>
                </div>

                {/* Radar Chart */}
                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm analytics-card">
                        <div className="card-body">
                            <h6 className="mb-3"><i className="fas fa-radar me-2"></i>Performance Metrics</h6>
                            <Radar data={radarData} options={options} />
                        </div>
                    </div>
                </div>

                {/* Bubble Chart */}
                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm analytics-card">
                        <div className="card-body">
                            <h6 className="mb-3"><i className="fas fa-circle me-2"></i>Engagement Overview</h6>
                            <Bubble data={bubbleData} options={options} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
