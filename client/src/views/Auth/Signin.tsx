import React from 'react'

import { SIGN_IN } from '../../mutations'
import AuthForm from '../../components/AuthForm'
import './auth.css'

const Signin = (props: any) => (
    <div className="auth-container">
      <h3>Sign In</h3>
      <AuthForm mutation={SIGN_IN} buttonLabel='Sign in' />
    </div>
)

export default Signin
