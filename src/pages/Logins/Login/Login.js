import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home';

    const auth = getAuth();

    // for login with email and password
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }
    
    
    // for login with google
    const { signInUsingGoogle } = useAuth();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
        })
    }

    return (
        <div className="container login-form">
            <div className='card shadow-lg my-5 w-50 mx-auto'>
                <form onSubmit={handleRegistration}>
                    <h2 className='text-success fw-bold mt-3 text-center'>Please {isLogin ? 'Login' : 'Register' } </h2>
                    
                    {isLogin ?
                        <div className='text-center'>
                            <label for="validationDefault05" className="form-label text-start me-5">Email:</label>
                            <input onBlur={handleEmailChange} className='my-1' type="email" name="" id="" placeholder="Your Email" required />
                            <br />

                            <label for="validationDefault05" className="form-label text-start">Password:</label>
                            <input onBlur={handlePasswordChange} className='my-1 ms-3' type="password" name="" id="" placeholder='Password' required />
                            <br />
                        </div>
                        :
                        <div className='text-center'>
                            <label for="validationDefault05" className="form-label text-start me-5">Name:</label>
                            <input onBlur={handleNameChange} className='my-1' type="text" name="" id="" placeholder="Your Name" required /><br />

                            <label for="validationDefault05" className="form-label text-start me-5">Email:</label>
                            <input onBlur={handleEmailChange} className='my-1' type="email" name="" id="" placeholder="Your Email" required />
                            <br />

                            <label for="validationDefault05" className="form-label text-start">Password:</label>
                            <input onBlur={handlePasswordChange} className='my-1 ms-3' type="password" name="" id="" placeholder='Password' required />
                            <br />
                        </div>
                    }
                    

                    <div className="form-check ms-5 mt-4">
                        <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                        <label className="form-check-label" htmlFor="gridCheck1">
                            Already Registered ?
                        </label>
                    </div>

                    <div className='text-danger ms-5 my-2'>
                        {error}
                    </div>

                    <div className="text-center my-3">
                        <button type="submit" className='btn btn-success'>
                            {isLogin ?
                                'Login' : 'Register'}
                        </button>

                        <button type='button' onClick={handleResetPassword} className="btn btn-danger ms-3">Reset Password</button>
                    </div>
                </form>

                <div className="text-center">
                    <p>New to <span className='fw-bold text-danger'>MEDICAL PLANET? </span></p>
                    <Link to="/login"> <button className='btn btn-outline-primary ms-1'>Create Account</button></Link>
                </div>

                <div className='text-center'>----------or----------</div>
                <button
                    className="btn btn-warning my-3 w-50 mx-auto"
                    onClick={handleGoogleLogin}
                >Google Sign In
                </button>
            </div>
        </div>
    );
};

export default Login;