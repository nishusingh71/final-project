import React from 'react'
import { Link } from 'react-router-dom'

const EditCategory = () => {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between ">
        <h5>Edit Category</h5>
        <Link to="/admin/category" className='btn btn-primary btn-sm text-white'>Back</Link>
      </div>
      <div className="card-body">
        <form>
          <div className='form-group mb-4'>
            <label htmlFor="name" className='mb-2'>Name</label>
            <input type="text" id='name' className='form-control' />
          </div>

          <div className='form-group mb-4'>
            <label htmlFor="image" className='mb-2'>Image</label>
            <input type="file" id='image' className='form-control' />
          </div>

          <div className='form-group mb-4'>
            <label htmlFor="status" className='mb-2'>Status</label>
            <select id="status" className='form-control'>
              <option value="" hidden>Select Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
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

export default EditCategory