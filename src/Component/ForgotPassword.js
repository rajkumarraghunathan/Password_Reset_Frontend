import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { API_URL } from '../API/api';


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleForgotPassword = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${API_URL}/forgot-password`, { email: email }, { withCredentials: true });
            setMessage('Password reset link sent to your email');

        } catch (error) {
            setMessage('User not found');
        }

    };

    return (
        <div className='container-fluid'>
            <div className=' d-flex justify-content-center align-items-center bg-fg' >
                <div className="card dropdown-menu card-design-fg " >
                    <div className="card-body " >

                        {/* ---------------------------------------------------------------------------------------------------------------------------------*/}

                        <h4 className="pb-3" style={{ textAlign: "center", color: 'blue' }}>Password Set</h4>

                        {/* ---------------------------------------------------------------------------------------------------------------------------------*/}
                        <form onSubmit={handleForgotPassword}>

                            {/* ---------------------------------------------------------------------------------------------------------------------------------*/}

                            <div className="form-group row">
                                <div className="mb-3 pt-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-light">Email address</label>
                                    <input type="email" className="form-control color" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}
                                        onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                            </div>

                            {/* ---------------------------------------------------------------------------------------------------------------------------------*/}

                            <div className="mb-3">
                                <p style={{ textAlign: "center", color: 'blue' }}><Link to='/Register'>Register</Link></p>
                            </div>

                            {/* ---------------------------------------------------------------------------------------------------------------------------------*/}

                            <div className='d-grid'>
                                <button type="submit" className="btn btn-success" >Submit</button>
                            </div>

                            {/* ---------------------------------------------------------------------------------------------------------------------------------*/}
                        </form>




                        <p className='text-center text-success'>{message}</p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
