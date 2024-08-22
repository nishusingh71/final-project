import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import { Link } from 'react-router-dom'

const Thank = () => {
  return (
    <>
      <Breadcrumb marginTop={"150px"} />

      <div className='container mt-4 text-center' style={{height: "45vh"}}>
            <h2 className='mb-4'>Order Placed</h2>
            <h4 className='mb-4'>Thank your for purchasing the product</h4>

            <Link to="/" className='btn btn-primary bt-lg text-white py-3 px-5'>Continue Shopping</Link>
      </div>
    </>
  )
}

export default Thank