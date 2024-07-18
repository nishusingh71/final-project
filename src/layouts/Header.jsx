import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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
                            <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <Link to="#" className="text-white">123 Street, New York</Link></small>
                            <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><Link to="#" className="text-white">Email@Example.com</Link></small>
                        </div>
                        <div className="top-link pe-2">
                            <Link to="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</Link>
                            <Link to="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</Link>
                            <Link to="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></Link>
                        </div>
                    </div>
                </div>
                <div className="container px-0">
                    <nav className="navbar navbar-light bg-white navbar-expand-xl">
                        <Link to="index.html" className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></Link>
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                <Link to="index.html" className="nav-item nav-link active">Home</Link>
                                <Link to="shop.html" className="nav-item nav-link">Shop</Link>
                                <Link to="shop-detail.html" className="nav-item nav-link">Shop Detail</Link>
                                <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                        <Link to="cart.html" className="dropdown-item">Cart</Link>
                                        <Link to="chackout.html" className="dropdown-item">Chackout</Link>
                                        <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
                                        <Link to="404.html" className="dropdown-item">404 Page</Link>
                                    </div>
                                </div>
                                <Link to="contact.html" className="nav-item nav-link">Contact</Link>
                            </div>
                            <div className="d-flex m-3 me-0">
                                <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary"></i></button>
                                <Link to="#" className="position-relative me-4 my-auto">
                                    <i className="fa fa-shopping-bag fa-2x"></i>
                                    <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{
                                        top: "-5px", left: "15px", height: "20px", minWidth: "20px"
                                    }}>3</span>
                                </Link>
                                <Link to="#" className="my-auto">
                                    <i className="fas fa-user fa-2x"></i>
                                </Link>
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