import React from 'react'
import { initialState } from './productValidation'
import { useFormData } from '../../../hooks/useFormData'
import { Link } from 'react-router-dom';
import TextInput from '../../../components/ui/TextInput';
import Textarea from '../../../components/ui/Textarea';
import Number from '../../../components/ui/Number';
import SelectBox from '../../../components/ui/SelectBox';
import { useSelector } from 'react-redux';

const AddProduct = () => {
  let categories = useSelector(state => state.category.categories);

  console.log(categories);

  let [formData, uploadFileStatus, , inputChange, uploadFiles] = useFormData(initialState, "product");

  const submit = (event) => {
    event.preventDefault();

  }
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between ">
        <h5>Add Product</h5>
        <Link to="/admin/product" className='btn btn-primary btn-sm text-white'>Back</Link>
      </div>
      <div className="card-body">
        <form onSubmit={submit}>
          {initialState.length > 0 && initialState.map((state, index) => {
            if(state.type === "text") {
              return <TextInput formControl={state} inputChange={inputChange} key={index}/>
            }

            if(state.type === "textarea") {
              return <Textarea formControl={state} inputChange={inputChange}  key={index} />
            }

            if(state.type === "number") {
              return <Number formControl={state} inputChange={inputChange} key={index}/>
            }

            if(state.type === "select") {
              if(state.name === "status") {
                return <SelectBox formControl={state} inputChange={inputChange} values={[{name: "active"}, {name:"inactive"}]} key={index} />
              }

              if(state.name === "type") {
                return <SelectBox formControl={state} inputChange={inputChange} values={[{name: "simple"}, {name:"virtual"}]} key={index} />
              }

              if(state.name === "category") {
                return <SelectBox formControl={state} inputChange={inputChange} values={categories} />
              }
            }

            return null;
          })}
         

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

export default AddProduct