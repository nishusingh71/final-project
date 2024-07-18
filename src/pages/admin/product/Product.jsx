import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between ">
        <h5>Product</h5>
        <Link to="/admin/product/add" className='btn btn-primary btn-sm text-white'>Add Product</Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Type</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <td>
                  <Link to={`#`} className='btn btn-warning me-2'>Edit</Link>
                  <button className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Product