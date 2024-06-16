import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import SubmitButton from '../Common/Button';
import TextField from '../Common/MuiTextField';


export default function SignupForm({ signupLoading, handleSubmit, response }) {
    const validate = Yup.object({
        name: Yup.string().required(),
        email: Yup.string().email()
            .required('Enter your email.'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters.')
            .required('Enter your password.'),
    })
    return (
        <Formik
            initialValues={{
                name:'',
                email: '',
                password: '',
            }}
            validationSchema={validate}
            onSubmit={async (values) => {
                const { email, password , name } = values
                handleSubmit(email, password , name)
            }}
        >
            <Form>
                <TextField label='Name' name='name' placeholder='Name' sx={{ mb: 1 }} />
                <TextField label='Email' name='email' placeholder='Email' sx={{ mb: 1 }} />
                <TextField label='Password' type="password" name='password' placeholder='Your Password' sx={{ mb: 2}} />
                {/* <button>Resend</button>   */}
                <SubmitButton
                    loading={signupLoading}
                    fullWidth
                    label='Sign In'
                />

                {/* {response && !response.success && <div className="alert alert-danger mt-3" role="alert">{response.error}</div>} */}
            </Form>
        </Formik>
    )
}
