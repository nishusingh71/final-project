import React from 'react'
import { Link } from 'react-router-dom'

const ProfileEdit = () => {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between ">
        <h5>Edit Profile</h5>
        <Link to="/admin/dashboard" className='btn btn-primary btn-sm text-white'>Back</Link>
      </div>
      <div className="card-body">
        <form>
          <div className='form-group mb-4'>
            <label htmlFor="name" className='mb-2'>Name</label>
            <input type="text" id='name' className='form-control' />
          </div>
          <div className='form-group mb-4'>
            <label htmlFor="email" className='mb-2'>Email</label>
            <input type="email" id='email' className='form-control' />
          </div>
          <div className='form-group mb-4'>
            <label htmlFor="contact_number" className='mb-2'>Contact Number</label>
            <input type="text" id='contact_number' className='form-control' />
          </div>
          <div className='form-group mb-4'>
            <label htmlFor="image" className='mb-2'>Image</label>
            <input type="file" id='image' className='form-control' />
          </div>

          <div className='row'>
              <div className="col-sm-6 d-grid">
                <button type='submit' className='btn btn-primary text-white'>Submit</button>
              </div>
              <div className="col-sm-6 d-grid">
                <button type='reset' className='btn btn-warning text-white'>Reset</button>
              </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileEdit