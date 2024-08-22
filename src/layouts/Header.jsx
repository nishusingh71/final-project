import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Header = () => {
    let currentUser = useSelector((state) => state.user.currentUser);
    let currentCart = useSelector((state) => state.cart.currentCart);

    return (
        <>
            {/* <!-- Spinner Start --> */}
            <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary" role="status"></div>
            </div>
            {/* <!-- Spinner End --> */}

            {/* <!-- Navbar start --> */}
            <div className="container-fluid fixed-top">
                <div className="container topbar bg-primary d-none d-lg-block">
                    <div className="d-flex justify-content-between">
                        <div className="top-info ps-2">
                            <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <Link to="#" className="text-white">A 43 Sector 16 Noida UP - 201301</Link></small>
                            <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><Link to="#" className="text-white">deepakducat012@gmail.com</Link></small>
                        </div>
                    </div>
                </div>
                <div className="container px-0">
                    <nav className="navbar navbar-light bg-white navbar-expand-xl">
                        <Link to="/" className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></Link>
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                {!currentUser.name && <>
                                    <Link to="/register" className="nav-item nav-link">Register</Link>
                                    <Link to="/login" className="nav-item nav-link">Login</Link>
                                </>}
                            </div>
                            <div className="d-flex m-3 me-0">
                                {currentUser.name && <>
                                    {
                                        currentCart.items.length > 0 && <Link to="/cart" className="position-relative me-4 my-auto">
                                            <i className="fa fa-shopping-bag fa-2x"></i>
                                            <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{
                                                top: "-5px", left: "15px", height: "20px", minWidth: "20px"
                                            }}>
                                                {currentCart.items.length}
                                            </span>
                                        </Link>
                                    }
                                    <Link to="/admin/dashboard" className="my-auto">
                                        <i className="fas fa-user fa-2x"></i>
                                    </Link>
                                </>}

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}
        </>
    )
}

export default Header