import React,{useState} from 'react';
// import RegisterImage from '../assets/images/register.svg';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {register} from '../store/actions/auth';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';

import './Registration.css';

function Register({history}) {

    const dispatch = useDispatch()

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const submitForm = (e) =>{
        e.preventDefault();
        dispatch(register({firstName,lastName,email,password},history))
    }
    return (
        <div className="main-body">
        <Navbar />
        <div className="main-content">
        
        <form className="form-register" onSubmit={submitForm}>

            <div className="form-register-with-email">

                <div className="form-white-background">

                    <div className="form-title-row">
                        <h1>Create an account</h1>
                    </div>

                    <div className="form-row">
                        <label>
                            <span>First Name</span>
                            <input onChange={e=>setFirstName(e.target.value)} value={firstName} required='required' type='text'></input>
                        </label>
                    </div>
                    <div className="form-row">
                        <label>
                            <span>Last Name</span>
                            <input onChange={e=>setLastName(e.target.value)} value={lastName} required='required' type='text' ></input>
                        </label>
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

                    {/* <div className="form-row">
                        <label className="form-checkbox">
                            <input type="checkbox" name="checkbox" checked></input>
                            <span>I agree to the <a href="#">terms and conditions</a></span>
                        </label>
                    </div> */}

                    <div className="form-row final">
                        <button type="submit">Register</button>
                    </div>

                </div>

                <a href="/Login" className="form-log-in-with-existing">Already have an account? Login here &rarr;</a>

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

    </div>
    {/* <Footer/>  */}
    </div>
    )
}

export default Register
