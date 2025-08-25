import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, updateUser, deleteUser } from '../redux/slices/usersSlice';

export default function Users() {
    // Get users from Redux store
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    // Form state remains local
    const [form, setForm] = useState({ id: null, name: '', email: '', phone: '', role: 'User' });
    const [errors, setErrors] = useState({});

    const validate = (v) => {
        const e = {};
        if (!v.name.trim()) e.name = 'Name required';
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) e.email = 'Valid email required';
        if (!/^[0-9]{10,14}$/.test(v.phone)) e.phone = '10-14 digits';
        if (!v.role) e.role = 'Role required';
        return e;
    };

    const onSubmit = (ev) => {
        ev.preventDefault();
        const v = validate(form);
        setErrors(v);
        if (Object.keys(v).length) return;

        if (form.id) {
            dispatch(updateUser(form));
        } else {
            dispatch(addUser(form));
        }

        setForm({ id: null, name: '', email: '', phone: '', role: 'User' });
    };

    const onEdit = (u) => setForm(u);
    const onDelete = (id) => dispatch(deleteUser(id));

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="mb-3"><i className="fas fa-users me-2"></i>Users Management</h5>

                {/* Form */}
                <form className="row g-2 mb-3" onSubmit={onSubmit}>
                    <div className="col-12 col-lg-2 col-md-6">
                        <input className="form-control" placeholder="Name" value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })} />
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                    </div>
                    <div className="col-12 col-lg-2 col-md-6">
                        <input className="form-control" placeholder="Email" value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })} />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>
                    <div className="col-12 col-lg-2 col-md-6">
                        <input className="form-control" placeholder="Phone" value={form.phone}
                            onChange={e => setForm({ ...form, phone: e.target.value })} />
                        {errors.phone && <small className="text-danger">{errors.phone}</small>}
                    </div>
                    <div className="col-12 col-lg-2 col-md-6">
                        <select className="form-select" value={form.role}
                            onChange={e => setForm({ ...form, role: e.target.value })}>
                            <option>User</option><option>Admin</option><option>Manager</option>
                        </select>
                        {errors.role && <small className="text-danger">{errors.role}</small>}
                    </div>
                    <div className="col-12 col-lg-4 col-md-12 d-flex gap-2">
                        <button type="submit" className="btn btn-primary w-100">
                            <i className={`fas ${form.id ? 'fa-save' : 'fa-plus'} me-1`}></i>
                            {form.id ? 'Save' : 'Add User'}
                        </button>
                        {form.id && (
                            <button type="button" className="btn btn-outline-secondary"
                                onClick={() => setForm({ id: null, name: '', email: '', phone: '', role: 'User' })}>
                                <i className="fas fa-times"></i>
                            </button>
                        )}
                    </div>
                </form>

                {/* Table view for larger screens */}
                <div className="d-none d-md-block">
                    <table className="table table-striped table-hover align-middle table-sm">
                        <thead>
                            <tr>
                                <th><i className="fas fa-user me-2"></i>Name</th>
                                <th><i className="fas fa-envelope me-2"></i>Email</th>
                                <th><i className="fas fa-phone me-2"></i>Phone</th>
                                <th><i className="fas fa-user-tag me-2"></i>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(u => (
                                <tr key={u.id}>
                                    <td className="text-nowrap text-truncate" style={{ maxWidth: "150px" }}>{u.name}</td>
                                    <td className="text-nowrap text-truncate" style={{ maxWidth: "200px" }}>{u.email}</td>
                                    <td className="text-nowrap text-truncate" style={{ maxWidth: "120px" }}>{u.phone}</td>
                                    <td className="text-nowrap text-truncate" style={{ maxWidth: "100px" }}>{u.role}</td>
                                    <td className="text-end">
                                        <div className="d-flex justify-content-end flex-nowrap">
                                            <button className="btn btn-sm btn-primary me-2" onClick={() => onEdit(u)}>
                                                <i className="fas fa-edit me-1"></i>Edit
                                            </button>
                                            <button className="btn btn-sm btn-danger" onClick={() => onDelete(u.id)}>
                                                <i className="fas fa-trash-alt me-1"></i>Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {!users.length && <tr><td colSpan="5" className="text-center">No users</td></tr>}
                        </tbody>
                    </table>
                </div>

                {/* Card view for mobile screens */}
                <div className="d-md-none mt-3">
                    {users.length > 0 ? (
                        <div className="row g-3">
                            {users.map(u => (
                                <div className="col-12" key={u.id}>
                                    <div className="card shadow-sm">
                                        <div className="card-body">
                                            <h6 className="card-title">
                                                <i className="fas fa-user me-2"></i>
                                                {u.name}
                                            </h6>
                                            <div className="mb-2">
                                                <i className="fas fa-envelope me-2 text-muted"></i>
                                                <span className="text-truncate">{u.email}</span>
                                            </div>
                                            <div className="mb-2">
                                                <i className="fas fa-phone me-2 text-muted"></i>
                                                <span>{u.phone}</span>
                                            </div>
                                            <div className="mb-3">
                                                <i className="fas fa-user-tag me-2 text-muted"></i>
                                                <span className="badge bg-primary">{u.role}</span>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <button className="btn btn-sm btn-primary flex-grow-1" onClick={() => onEdit(u)}>
                                                    <i className="fas fa-edit me-1"></i>Edit
                                                </button>
                                                <button className="btn btn-sm btn-danger flex-grow-1" onClick={() => onDelete(u.id)}>
                                                    <i className="fas fa-trash-alt me-1"></i>Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="alert alert-info text-center">No users available</div>
                    )}
                </div>
            </div>
        </div>
    );
}


