import React from 'react'

import { SIGN_UP } from '../../mutations'
import AuthForm from '../../components/AuthForm'
import './auth.css'

const Signup = () => (
  <div className="auth-container">
    <h3>Sign Up</h3>
    <AuthForm mutation={SIGN_UP} buttonLabel="Sign up" />
  </div>
)

export default Signup
