import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useFormData } from '../../../hooks/useFormData';
import { updateCategoryStart } from '../../../redux/action/category.action';
import { initialState } from './categoryValidation';

const EditCategory = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let categories = useSelector(state => state.category.categories);

  let [formData, uploadFileStatus, setFormData, inputChange, uploadFiles] = useFormData(initialState, 'category')

  const getCategoryById = useCallback((id) => {
    let category = categories.find((c) => c.id === id);

    if (category) {
      for (const key in formData) {
        if (key in category) {

          let obj = {
            ...formData[key],
            value: category[key]
          }

          setFormData((prevValue) => ({
            ...prevValue,
            [key]: obj,
            formStatus: "valid"
          }))
        }
      }

    } else {
      navigate("/admin/category")
    }
  }, [categories, formData, setFormData, navigate])

  const submit = (event) => {
    event.preventDefault();

    if (formData.formStatus === "valid") {
      let transferObject = {};

      for (const key in formData) {
        if (key !== "formStatus") {
          transferObject[key] = formData[key].value
        }
      }

      dispatch(updateCategoryStart(transferObject, id))

      setTimeout(() => {
        navigate('/admin/category')
      }, 1000);
    }
  }

  useEffect(() => {
    if (!id) {
      navigate("/admin/category")
    }

    getCategoryById(id)
  }, [id, navigate, getCategoryById])

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between ">
        <h5>Edit Category</h5>
        <Link to="/admin/category" className='btn btn-primary btn-sm text-white'>Back</Link>
      </div>
      <div className="card-body">
        <form onSubmit={submit}>
          <div className={formData.name.required && formData.name.touched && formData.name.value === "" ? 'form-group mb-4 text-danger' : 'form-group mb-4'}>
            <label htmlFor="name" className='mb-2'>Name</label>
            <input
              type="text"
              id='name'
              className={formData.name.required && formData.name.touched && formData.name.value === "" ? 'form-control border-danger' : 'form-control'}
              name='name'
              value={formData.name.value}
              onChange={(event) => inputChange(event, formData.name)} />
            {
              formData.name.required && formData.name.touched && formData.name.value === "" &&
              <p className="mt-2 text-danger">{formData.name.description}</p>
            }
          </div>

          <div className={formData.image.required && formData.image.touched && formData.image.value === "" ? 'form-group mb-4 text-danger' : 'form-group mb-4'}>
            <label htmlFor="image" className='mb-2'>Image</label>
            <input
              type="file"
              id='image'
              className={formData.image.required && formData.image.touched && formData.image.value === "" ? 'form-control border-danger' : 'form-control'}
              onChange={(event) => uploadFiles(event, formData.image)} />
            {
              formData.image.value && <div className='mt-2'>
                <img src={formData.image.value} alt="" height={"50px"} />
              </div>
            }
            {
              formData.image.required && formData.image.touched && formData.image.value === "" &&
              <p className="mt-2 text-danger">{formData.image.description}</p>
            }
          </div>

          <div className={formData.status.required && formData.status.touched && formData.status.value === "" ? 'form-group mb-4 text-danger' : 'form-group mb-4'}>
            <label htmlFor="status" className='mb-2'>Status</label>
            <select
              id="status"
              className={formData.status.required && formData.status.touched && formData.status.value === "" ? 'form-control border-danger' : 'form-control'}
              name='status'
              value={formData.status.value}
              onChange={(event) => inputChange(event, formData.status)}>
              <option value="" hidden>Select Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
            {
              formData.status.required && formData.status.touched && formData.status.value === "" &&
              <p className="mt-2 text-danger">{formData.status.description}</p>
            }
          </div>

          <div className='row'>
            <div className="col-sm-6 d-grid">
              <button
                type='submit'
                className='btn btn-primary text-white'
                disabled={uploadFileStatus}>Submit</button>
            </div>
            <div className="col-sm-6 d-grid">
              <button
                type='reset'
                className='btn btn-warning text-white'
                disabled={uploadFileStatus}>Reset</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditCategory