import { reload } from '@firebase/auth';
import React, { useEffect, useState } from 'react';

import { useHistory, useLocation } from 'react-router';

import useAuth from '../../Hooks/useAuth';


const Login = () => {

    const { error, updateUserInfo, SignInWithGoogle, isLoading, signInWithGithub, user, userSignup, singInwithPasswordMail, logOut } = useAuth();
    const [isAlredyUser, setIsAlredyUser] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location?.state?.from || '/';

    console.log("came from" + location.state?.from);
    useEffect(() => {
        if (user?.email != null && user.displayName == null) {
            window.location.reload();
        }

    }, [])

    const handleCheckBox = e => {

        setIsAlredyUser(e.target.checked);

    };
    console.log(user);

    const getEmail = e => {
        setEmail(e.target.value);
    }
    const getPassword = e => {
        setPassword(e.target.value);

    }
    const getName = e => {
        setName(e.target.value);
    }
    const handleRegistration = () => {
        console.log("Resitiration clicked");

        if (isAlredyUser === true) {
            singInwithPasswordMail(email, password);
            if (user.email) {
                history.push(redirect_url);
            }
        }
        else {
            userSignup(name, email, password);
            // history.push(redirect_url);


        }
        // if (user.email != null && user.displayName === null) {
        //     window.location.reload();
        // }

    }
    const handlegooglesignIn = () => {
        SignInWithGoogle();
        if (user.email) {
            history.push(redirect_url);
        }



    }



    return (


        <div className='d-flex mt-5 p-5'>
            <div className="container my-auto">
                <div className="card shadow sm-w-100 mx-auto  w-100 " >

                    <div className="card-body ">
                        <h5 className="card-title text-center h3">{isAlredyUser ? "Sign In" : "Sign Up"}</h5>
                        <div className="d-flex flex-row gap-3  justify-content-center m-3">


                            <div>
                                <button onClick={handlegooglesignIn} className='btn btn-danger'><i className="bi bi-google"></i>  Sign in With Google</button>
                            </div>
                            <div>
                                <button onClick={signInWithGithub} className='btn btn-dark'><i className="bi bi-github"></i>  Sign in With Github</button>
                            </div>




                        </div>
                        {user.email && isAlredyUser && <p className="text-success">Login success</p>}
                        {user.email && !isAlredyUser && user.displayName === null && < p className="text-success">Registration successfull.Please Reloads page to see the updated Name info!!  </p>}
                        {error && <p>{error}</p>}



                        <div className="d-flex flex-column gap-3 justify-content-center mt-5 m-3" >

                            <form className='g-2'>

                                {
                                    !isAlredyUser && <div>
                                        <input type="text" onBlur={getName} className="form-control mb-3" id="name" placeholder="Name" />
                                    </div>
                                }
                                <div>

                                    <input onBlur={getEmail} type="email" className="form-control mb-3" id="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input onBlur={getPassword} type="password" className="form-control mb-3" id="password" placeholder="Paswword" />
                                </div>
                            </form>
                            <div>
                                <button type='submit' onClick={handleRegistration} className="w-100 btn btn-success  p-1 text-white"> <i class="bi bi-box-arrow-in-right">  </i> {isAlredyUser ? "Sign In" : "Register"}</button>

                            </div>

                            <div>
                                <input onChange={handleCheckBox} type="checkbox" className=" size" id="exampleCheck1" />
                                <label className="form-check-label ms-1 text-dark" htmlFor="exampleCheck1">  Already Registered?</label>



                            </div>



                        </div>




                    </div>
                </div>



            </div>
        </div >
    );
};

export default Login;