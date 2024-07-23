import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart';

const Header = () => {
    const {totalItems} = useCart();


    const [activeUser, setActiveUser] = useState(null);
    const navigate = useNavigate();
    const [setUser] = useState({
        fullname: '',
        phone: '',
        email: '',
    });

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

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("activeUser"));
        setActiveUser(user);
        window.scrollTo(0, 0)
    }, []);

    const isAdmin = activeUser && activeUser.email === "admin@admin.com";
    return (
       <Header>
         <div className="container" id='header-nav'>
            <div className="top-bar-inners" id='top-bars'>
                <div className="top-bar-inner1">
                    <div className="inner1-barOne">English<i class="fa-solid fa-angle-up" style={{ transform: "rotate(180deg)" }}></i></div>
                    <div className="inner-bar-line">|</div>
                    <div className="inner1-barTwo">FREESHIPPING FOR ALL ORDERS OF $150</div>
                </div>


                <div className="top-bar-inner2">
                    <div className="inner2-barOne">
                        <a href=""><i class="fa-brands fa-facebook"></i></a>
                        <a href=""><i class="fa-solid fa-screwdriver-wrench"></i></a>
                        <a href=""><i class="fa-brands fa-pinterest"></i></a>
                        <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href=""><i class="fa-brands fa-telegram"></i></a>
                    </div>
                    <div className="inner-bar-line">|</div>
                    <Link to="/contact"><div className="inner2-barTwo">CONTACT US</div></Link>
                    <div className="inner-bar-line">|</div>
                    <Link to="/faq"><div className="inner2-barThree">FAQS</div></Link>
                </div>
            </div>

            <div className="hr"></div>


            <div className="header-navbar">
                <div className="header-navbar-img">
                    <img src="https://i.pinimg.com/originals/4a/c2/98/4ac298a7436daf6377a7952955f4c63c.png" alt="" />
                </div>

                <div className="header-pages">
                    <NavLink to="/"><div className="pageOne">Home</div></NavLink>
                    <div className="inner-bar-line">|</div>
                    <NavLink to="/add"><div className="pageTwo">Shop</div></NavLink>
                    <div className="inner-bar-line">|</div>

                    <NavLink to="/dashboard"><div className="pageFour">Dashboard</div></NavLink>
                    <div className="inner-bar-line">|</div>
                    <NavLink to="/about"><div className="pageFive">About</div></NavLink>
                </div>

                <div className="header-page-logo">
                    <div className="header-search">
                        <a href=""></a>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <div className="header-wishlist">
                        <a href=""></a>
                        <i class="fa-regular fa-heart"></i>
                    </div>

                    <div className="dropdown">
                        <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {
                                localStorage.getItem("login") === "true" ? (
                                    <Link to="/account">
                                        {activeUser && activeUser.fullname === "Admin" ? "Admin" : activeUser?.fullname}
                                    </Link>
                                ) : (
                                    <Link to="/login">Login</Link>
                                )


                            }
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                {isAdmin && (
                                    <NavLink to='/dashboard'>
                                        <button>Dashboard</button>
                                    </NavLink>
                                )}
                            </li>


                            <li>
                                <button onClick={handleLogout} className='btn btn-outline-danger mt-4'>Log Out</button>
                            </li>

                        </ul>
                    </div>


                    <Link to="/basket">
                        <div className="header-basket">
                            <div type="button" class="position-relative">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {totalItems}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </div >
       </Header>











    )
}

export default Header
