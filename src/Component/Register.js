import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { API_URL } from '../API/api';



const Register = () => {

    const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');


    const navigate = useNavigate();


    const handleInput = (event) => {
        event.preventDefault()
        const accessToken = Cookies.get('accessToken');
        axios.post(`${API_URL}/Signup`, {

            email: email,
            // password: password

        }, {
            headers: {
                cookies: accessToken,
            },
            withCredentials: true
        }).then((response) => {
            if (response.data.message === 'New user was added Sucessfully................') {
                return navigate('/')
            }
            else if (response.data.message === "User Already Exists") {
                return toast('User Already Exists')
            }
            else {
                return toast('Error While Added a User')
            }
        }).catch(err => {
            return toast(err.response.data.message)
        })
    }

    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-center align-items-center design re-bg' >
                <div className="card dropdown-menu card-design-re " >
                    <div className="card-body " >

                        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

                        <h1 className="pb-3" style={{ textAlign: "center", color: 'blue' }}>REGISTER</h1>

                        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}



                        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

                        <form onSubmit={handleInput}>
                            {/* <div className="mb-3 pt-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control color" value={name} onChange={e => setName(e.target.value)} />

                            </div> */}

                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

                            <div className="mb-3 pt-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control color" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />

                            </div>

                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

                            {/* <div className="mb-3 pt-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control color" value={password} onChange={e => setPassword(e.target.value)} />
                            </div> */}

                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}


                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

                            <div className="mb-3">
                                <p className='d-flex justify-content-center text-light'>
                                    Already have an account?<Link className=' ' style={{ textDecoration: 'none' }} to='/'>Login</Link>
                                </p>
                                {/* <p className='d-flex justify-content-center text-light'>
                                    for Admin?<Link className=' ' style={{ textDecoration: 'none' }} to='/AdminPage'>Create for Admin</Link>
                                </p> */}
                            </div>

                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}



                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

                            <div className='d-grid'>
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>

                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register