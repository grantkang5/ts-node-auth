import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { Redirect } from 'react-router-dom'

import { CURRENT_USER } from '../queries'

const requireAuth = (Component: React.ReactType) => {
  const Authenticate = (props: any) => {
    const { data } = useQuery(CURRENT_USER)
    if (!data.me) {
      return (
        <Redirect push to="/signin" />
      )
    }

    return (
      <Component {...props} />
    )
  }

  return Authenticate
}

export default requireAuth