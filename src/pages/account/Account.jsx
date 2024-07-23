import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Account = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullname: '',
        phone: '',
        email: '',
    });

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('login');
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            const activeUser = JSON.parse(localStorage.getItem('activeUser'));
            if (activeUser) {
                setUser(activeUser);
            }
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleLogout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('activeUser');
        setUser({
            fullname: 'Login',
            phone: '',
            email: '',
        });
        navigate('/login'); 
       window.location.reload()
    };

   

    return (

        <div className="account">
             <div className='container'>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h1 className='my-5 '>ACCOUNT</h1>
                <div className="col-6">
                    <form >
                        <div className="mb-3">
                            <label className="form-label">Fullname</label>
                            <input
                                name="fullname"
                                type="text"
                                className="form-control"
                                value={user.fullname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone number</label>
                            <input
                                name="phone"
                                type="phone"
                                className="form-control"
                                value={user.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">E-mail</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <button onClick={handleLogout} className='btn btn-outline-danger mt-4'>Log Out</button>
                    </div>
                </div>
            </div>
        </div>

        </div>
       
    );
};

export default Account;
