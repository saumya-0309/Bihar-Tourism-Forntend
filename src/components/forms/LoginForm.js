import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import SubmitButton from '../Common/Button';
import TextField from '../Common/MuiTextField';


export default function LoginForm({ loginLoading, handleSubmit, response }) {
    const validate = Yup.object({
        email: Yup.string().email()
            .required('Enter your email.'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters.')
            .required('Enter your password.'),
    })
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={validate}
            onSubmit={async (values) => {
                const { email, password } = values
                handleSubmit(email, password)
            }}
        >
            <Form>
                <TextField label='Email' name='email' placeholder='Email' sx={{ mb: 1 }} />
                <TextField label='Password' type="password" name='password' placeholder='Your Password' sx={{ mb: 2 }} />
                {/* <button>Resend</button>   */}
                <SubmitButton
                    loading={loginLoading}
                    fullWidth
                    label='Log In'
                />

                {response && !response.success && <div className="alert alert-danger mt-3" role="alert">{response.error}</div>}
            </Form>
        </Formik>
    )
}
