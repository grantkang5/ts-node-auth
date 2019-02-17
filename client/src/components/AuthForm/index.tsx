import React from 'react'
import { useMutation, useQuery } from 'react-apollo-hooks'
import { Formik, FormikProps, FormikActions } from 'formik'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import validationSchema from './validationSchema'
import { CURRENT_USER } from '../../queries'
import './authForm.css'

interface FormValues {
  email: string
  password: string
}

interface OtherProps {
  mutation: Function
  buttonLabel: string
}

const AuthForm = (props: OtherProps) => {
  const { mutation, buttonLabel } = props
  const { data } = useQuery(CURRENT_USER)
  const onSubmit = useMutation(mutation)

  if (data.me) {
    return <Redirect push to="/" />
  }

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(
          { email, password }: FormValues,
          { setSubmitting, setFieldError }: FormikActions<FormValues>
        ) => {
          onSubmit({
            variables: { email, password },
            refetchQueries: [{ query: CURRENT_USER }]
          }).then(() => {
            setSubmitting(false)
          }, error => {
            setFieldError('email', error.graphQLErrors[0].message)
            setSubmitting(false)
          })
        }}
        validationSchema={validationSchema}
        render={({
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          errors,
          touched,
          isSubmitting
        }: FormikProps<FormValues>) => (
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <TextField
                type="text"
                name="email"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="example@email.com"
                helperText={(touched.email && errors.email) || 'Email'}
                error={errors.email && touched.email ? true : false}
              />
            </div>

            <div className="input-field">
              <TextField
                type="password"
                name="password"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors.password && touched.password ? true : false}
                helperText={(touched.password && errors.password) || 'Password'}
                placeholder="Must contain at least 8 characters"
              />
            </div>

            <Button
              color="primary"
              variant="contained"
              type="submit"
              disabled={isSubmitting}
            >
              {buttonLabel}
            </Button>
          </form>
        )}
      />
    </div>
  )
}

export default AuthForm
