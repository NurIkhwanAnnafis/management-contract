import React, { Fragment } from 'react'

const Login = ({ children }) => {

  return (
    <div style={{ background: '#FEF5ED' }}>
      <div className='container vh-100'>
        {children}
      </div>
    </div>
  )
}

export default Login;