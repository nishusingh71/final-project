import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            {/* <!-- Copyright Start --> */}
            <div className="container-fluid copyright bg-dark py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <span className="text-light"><Link to="#"><i className="fas fa-copyright text-light me-2"></i>Ducat</Link>, All right reserved.</span>
                        </div>
                        <div className="col-md-6 my-auto text-center text-md-end text-white">
                            Designed By Deepak
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Copyright End --> */}
        </>
    )
}

export default Footer