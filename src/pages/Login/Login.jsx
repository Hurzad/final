
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("login");
        if (isLoggedIn) {
            navigate('/account');
        }
    }, [navigate]);

    const adminData = {
        fullname: "Admin",
        email: "admin@admin.com",
        phone:"+994-00-111-22-33",
        password: "123",
        tel: "123",
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        const user = registeredUsers.find(
            (u) => u.email === email && u.password === password
        );
        if (user) {
            localStorage.setItem("login", "true");
            localStorage.setItem("activeUser", JSON.stringify(user));
            navigate('/account'); 
            window.location.reload()
        } else if (adminData.email === email && adminData.password === password) {
            localStorage.setItem("activeUser", JSON.stringify(adminData));
            localStorage.setItem("login", "true");
            navigate('/account'); 
            window.location.reload()
        } else if (!email || !password) {
            toast.error('Please enter both email and password');
        } else {
            toast.error('Invalid email or password');
        }
    };

    return (
        <div className='container-fluid login'>
            <div className="col-6">
                <h1 className='my-5 ' style={{ color: 'white' }}>Login</h1>
                <form onSubmit={loginSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
                    </div>
                    <div className="my-5">
                        <label className="form-label">Password</label>
                        <div className="input-group">
                            <input onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} className="form-control" />
                            <span className="input-group-text" style={{ cursor: 'pointer', height:'38px' }} onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark">Login</button>
                </form>
                <h4 className='my-5'> Don't have an account?</h4>
                <Link to='/register' className="btn btn-dark">Sign Up</Link>
            </div>
        </div>
    );
};

export default Login;
