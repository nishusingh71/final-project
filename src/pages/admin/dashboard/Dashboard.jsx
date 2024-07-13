import React from 'react'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between ">
        <h5>Dashboard</h5>
        <Link to="/admin/edit-profile" className='btn btn-primary btn-sm text-white'>Edit Profile</Link>
      </div>
      <div className="card-body">
        <p className='border-bottom'>Name</p>
        <p className='border-bottom'>Email</p>
        <p className='border-bottom'>Contact Number</p>
        <p className='border-bottom'>Image</p>
        <p className='border-bottom'>Role</p>
      </div>
    </div>
  )
}

export default Dashboard