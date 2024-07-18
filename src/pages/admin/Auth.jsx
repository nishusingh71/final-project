import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../layouts/Sidebar'
import Breadcrumb from '../../components/Breadcrumb'

const Auth = () => {
  return (
    <>
      <Breadcrumb />

      <div className='container mt-4'>
        <div className='row'>
          <div className='col-sm-3'>
            <Sidebar />
          </div>
          <div className='col-sm-9'>
            <Outlet />
          </div>
        </div>
      </div>
    </>

  )
}

export default Auth