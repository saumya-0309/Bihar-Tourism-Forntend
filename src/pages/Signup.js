import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import React from 'react';
import SignupForm from '../components/forms/SignupForm';
import { useSignUp } from '../hooks/user';

const Signup = () => {
    let navigate = useNavigate();
    const { handleSignUp, signLoding } = useSignUp();
    const [response, setResponse] = React.useState(null);

    const handleSubmit = async (email , password , name) => {
        const res = await handleSignUp(email, password , name);
        setResponse(res);
        if (res.success) {
            toast.success("Login successfull");
            navigate(`/`);
        } else {
            toast.error(res.error);
        }
    };
    return (
        <section className='vh-100' style={{ backgroundColor: 'rgb(119, 101, 144)' }}>
            <div className="container py-3 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-9">
                        <div className="card" style={{ borderRadius: '1rem', height:'90vh' }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="/images3.jpg" alt="loading..."
                                       className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem', height:'90vh'}} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src="/images.png" style={{height:'120px' , width:'120px'}} alt="logo..."/>
                                        </div>
                                        <h2 className='text-center' style={{color:'purple'}}>Welcome To YatraBihar</h2>
                                        <h5 className='text-center'>SignIn to your Account</h5>
                                        <SignupForm
                                            handleSubmit={handleSubmit}
                                            loginLoading={signLoding}
                                            response={response}
                                        />
                                        <div className='mt-3 blockquote p-1'>Already have Account ? <Link to={'/account/login'}>LogIn Here</Link></div>
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

export default Signup;