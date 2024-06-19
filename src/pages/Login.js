import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLogin, useUser } from '../hooks/user';
import { toast } from 'react-toastify';
import LoginForm from '../components/forms/LoginForm';

const Login = () => {
    let navigate = useNavigate();
    const { handleLogin, loginLoading } = useLogin();
    const [response, setResponse] = React.useState(null);
    const { user, status, isLoading } = useUser();

    useEffect(() => {
        if(!isLoading && user?.user?.role === 'ADMIN'){
            navigate('/dashboard');
        }else if(!isLoading && user?.user?.role === 'USER'){
            navigate('/');
        }
    }, [isLoading, status,navigate, user])

    const handleSubmit = async (email, password) => {
        const res = await handleLogin(email, password);
        setResponse(res);
        if (res.success && res.data.role === 'ADMIN') {
            toast.success("Login Admin successfull");
            navigate(`/dashboard`);
        } else if(res.success && res.data.role === 'USER'){
            toast.success("Login User successfull");
            navigate(`/`);
        }else {
            toast.error(res.error);
        }
    };
    return (
        <section className='vh-100' style={{ backgroundColor: 'rgb(119, 101, 144)' }}>
            <div className="container py-3 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-9">
                        <div className="card" style={{ borderRadius: '1rem',  height:'90vh' }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="/images2.jpeg" alt="loading..."
                                        className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem', height: '90vh' }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src="/images.png" alt="logo..." style={{ height: '150px', width: '150px' }} />
                                        </div>
                                        <h2 className='text-center' style={{ color: 'purple' }}>Welcome To YatraBihar</h2>
                                        <h5 className='text-center'>Login to your Account</h5>
                                        <LoginForm
                                            handleSubmit={handleSubmit}
                                            loginLoading={loginLoading}
                                            response={response}
                                        />
                                        <div className='mt-3 blockquote p-1'>Do not have Account ? <Link to={'/account/signup'}>SignUp Here</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;