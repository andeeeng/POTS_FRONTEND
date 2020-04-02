import { Formik, FormikHelpers, FormikProps } from 'formik'
import { observer } from 'mobx-react'
import React from 'react'
import { IoIosLogIn } from 'react-icons/io'

import { object as yupObj, string as yupString } from 'yup'
import { onSubmit } from '../components/helper_functions'
import daviesLogo from '../img/davies-hires.png'
import ftLogo from '../img/ft-hires.png'
import logInBackground from '../img/login-graphics.png'
import potsLogo from '../img/pots-hires.png'
import { FormContainer } from '../styles/FormContainer'

export interface IProps {
  setQuery?: any
  rootStore?: any
}

interface FormikValues {
  user: string
  password: string
}

const Login = (props: IProps) => {
  const { setQuery, rootStore } = props
  const handleSubmit = (
    values: FormikValues,
    formikBag: FormikHelpers<FormikValues>,
  ) => {
    formikBag.setSubmitting(true)
    console.log('NAGSUBMIT')
    onSubmit(setQuery, rootStore, {
      username: values.user,
      password: values.password,
    })
  }

  const renderForm = ({
    values,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  }: FormikProps<FormikValues>) => {
    // isSubmitting = loading
    return (
      <FormContainer>
        <div className="brand-wrapper">
          <div className="brand-header">
            {' '}
            <img src={daviesLogo} alt="company logo" className="company-logo" />
          </div>
        </div>

        <div className="log-in-holder">
          <div className="directives-container">
            <h1 className="welcome">Welcome to your</h1>
            <img src={potsLogo} alt="login logo" className="login-logo" />
            <h2 className="h2-mod">Purchase Order Tracking System</h2>
            <ul>
              <li>Manage your orders anywhere.</li>
              <li>
                Manage your suppliers and maintain stable logistics anywhere.
              </li>
              <li>
                Keep track of your purchases with real-time updates from your
                supplier.
              </li>
            </ul>
            <br /> <br />
          </div>
          <div
            className="form-container"
            style={{
              backgroundImage: `url(${logInBackground})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '440px',
            }}>
            <form className="login-form">
              <div className="input-container">
                <label> Username/Email</label>
                <input
                  className="input-empty"
                  value={values.user}
                  onChange={(e: any) => setFieldValue('user', e.target.value)}
                  onBlur={() => setFieldTouched('user')}
                  contentEditable={!isSubmitting}
                />
              </div>
              <div className="input-container">
                <label>Password</label>
                <input
                  type="password"
                  className="input-empty"
                  value={values.password}
                  onChange={(e: any) =>
                    setFieldValue('password', e.target.value)
                  }
                  onBlur={() => setFieldTouched('password')}
                  contentEditable={!isSubmitting}
                />
              </div>
              <div className="input-container">
                <button className="login-btn" onClick={() => handleSubmit()}>
                  Log In <IoIosLogIn></IoIosLogIn>
                </button>
              </div>
            </form>
          </div>
          <div className="ft-credit">
            <span>Powered by: </span>
            <img src={ftLogo} alt="company logo" className="ft-logo" />
          </div>
        </div>
      </FormContainer>
    )
  }
  return (
    <Formik
      initialValues={{
        user: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      render={(formikBag: FormikProps<FormikValues>) => renderForm(formikBag)}
      validationSchema={yupObj().shape({
        user: yupString().required('Username is Required'),
        password: yupString().required('Password is Required'),
      })}></Formik>
  )
}

export default observer(Login)
