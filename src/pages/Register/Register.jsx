import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const [user, setUser] = useState({
        fullname: "",
        tel: "",
        email: "",
        password: "",
        againPassword: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const [showPassword, setShowPassword] = useState(false);

    const registerSubmit = (e) => {
        e.preventDefault();
        if (!user.fullname || !user.tel || !user.email || !user.password || !user.againPassword) {
            toast.warning('Please fill in all fields');
        } else {
            if (user.password === user.againPassword) {
                const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
                const existingUser = registeredUsers.find((u) => u.email === user.email);
                if (existingUser) {
                    toast.warning('Email already registered');
                } else {
                    registeredUsers.push(user);
                    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
                    setTimeout(() => {
                        window.location.assign("/login");
                    }, 2000);
                    toast.success('Registration successful');
                }
            } else {
                toast.warning('Passwords do not match');
            }
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='container-fluid login'>
            <div className="col-5">
                <h1 className='my-5' style={{ color: 'white' }}>Register</h1>
                <form onSubmit={registerSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Full name</label>
                        <input type="text" className="form-control" name='fullname' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone number</label>
                        <input type="text" className="form-control" name='tel' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="form-control"
                                name='password'
                                onChange={handleChange}
                            />
                            <span className="input-group-text" style={{height:'38px'}} onClick={toggleShowPassword}>
                                {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                            </span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type='password' className="form-control" name='againPassword' onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-dark">Sign Up</button>
                </form>
                <Link to='/login' className='my-3 btn btn-dark'>Already have an account?</Link>
            </div>
        </div>
    );
};

export default Register;
