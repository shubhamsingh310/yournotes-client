import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/auth';
import Navbar from './Navbar';
import Footer  from '../Footer/Footer';

import './Login.css';

const Login = ({ history }) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }, history))
    }

    return (
    
       <div className="main-body">
       <Navbar />
        <div className="main-content">
            
            <form className="form-login" onSubmit={submitForm}>

                <div className="form-log-in-with-email">

                    <div className="form-white-background">

                        <div className="form-title-row">
                            <h1>Log in</h1>
                        </div>

                        <div className="form-row">
                        <label>
                            <span>Email</span>
                            <input onChange={e=>setEmail(e.target.value)} value={email} required='required' type='text' ></input>
                        </label>
                    </div>

                    <div className="form-row">
                        <label>
                            <span>Password</span>
                            <input onChange={e=>setPassword(e.target.value)} value={password} required='required' type='password' ></input>
                        </label>
                    </div>

                        <div className="form-row final">
                            <button type="submit">Log in</button>
                        </div>

                    </div>

                    {/* <a href="#" className="form-forgotten-password">Forgotten password &middot;</a> */}
                    <a href="/Register" className="form-create-an-account">Create an account &rarr;</a>

                </div>

                {/* <div className="form-sign-in-with-social">

                    <div className="form-row form-title-row">
                        <span className="form-title">Sign in with</span>
                    </div>

                    <a href="#" className="form-google-button">Google</a>
                    <a href="#" className="form-facebook-button">Facebook</a>
                    <a href="#" className="form-twitter-button">Twitter</a>

                </div> */}

            </form>
            {/* <Footer/> */}
        </div>
        </div>

    );
}
export default Login;