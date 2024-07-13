import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategoryStart } from '../../../redux/action/category.action';

const Category = () => {
  let categories = useSelector(state => state.category.categories)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryStart())
  }, [categories.length])

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between ">
        <h5>Category</h5>
        <Link to="/admin/category/add" className='btn btn-primary btn-sm text-white'>Add Category</Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                categories.length > 0 && categories.map((category, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td><img height={"50px"} src="https://img.freepik.com/free-photo/elegant-young-handsome-man-studio-fashion-portrait_1301-4975.jpg?t=st=1720593088~exp=1720596688~hmac=fc8508883a86c2431a3d07f2d3b90b11f5134ba861fde28193e77a3969c6fc58&w=360" alt="" /></td>
                    <td>{category.name}</td>
                    <td>{category.status === "1" ? "Active" : "Inactive"}</td>
                    <td>
                      <Link to="/admin/category/edit" className='btn btn-warning me-2'>Edit</Link>
                      <button className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Category