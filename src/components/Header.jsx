import user from '../assets/user.png';
export default function Header({ toggleSidebar, isOpen }) {
    return (
        <header className="bg-white shadow-sm p-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <button
                        className="btn btn-outline-primary d-md-none me-2"
                        onClick={toggleSidebar}
                        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
                    >
                        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                    <div className="d-flex align-items-center">
                        <img src={user} alt="User" className="rounded-circle me-2" />
                        <div className=''>
                            <h5 className="m-0" style={{ color: "var(--primary-color)" }}>Welcome, Admin</h5>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <button className="btn btn-outline-primary">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </button>
                </div>
            </div>
        </header>
    );
}