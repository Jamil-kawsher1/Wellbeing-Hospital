import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const { updateUserInfo, SignInWithGoogle, isLoading, signInWithGithub, user, userSignup, singInwithPasswordMail } = useAuth();
    const [isAlredyUser, setIsAlredyUser] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


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

        }
        else {
            userSignup(name, email, password);

        }
        console.log(email, password, name);


    }

    return (


        <div className='d-flex mt-5 p-5'>
            <div className="container my-auto">
                <div className="card shadow sm-w-100 mx-auto  w-100 " >

                    <div className="card-body ">
                        <h5 className="card-title text-center h3">{isAlredyUser ? "Sign In" : "Sign Up"}</h5>
                        <div className="d-flex flex-row gap-3  justify-content-center m-3">


                            <div>
                                <button onClick={SignInWithGoogle} className='btn btn-danger'><i className="bi bi-google"></i>  Sign in With Google</button>
                            </div>
                            <div>
                                <button onClick={signInWithGithub} className='btn btn-dark'><i className="bi bi-github"></i>  Sign in With Github</button>
                            </div>


                        </div>


                        <div className="d-flex flex-column gap-3 justify-content-center mt-5 m-3" >

                            <form className='g-2'>

                                {
                                    !isAlredyUser && <div>
                                        <input type="text" onBlur={getName} className="form-control mb-3" id="inputEmail3" placeholder="Name" />
                                    </div>
                                }
                                <div>

                                    <input onBlur={getEmail} type="email" className="form-control mb-3" placeholder="Email" />
                                </div>
                                <div>
                                    <input onBlur={getPassword} type="password" className="form-control mb-3" id="inputEmail3" placeholder="Paswword" />
                                </div>
                            </form>
                            <div>
                                <button type='submit' onClick={handleRegistration} className="w-100 btn btn-success  p-1 text-white"> <i class="bi bi-box-arrow-in-right">  </i> {isAlredyUser ? "Sign In" : "Register"}</button>

                            </div>

                            <div>
                                <input onChange={handleCheckBox} type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label ms-1" htmlFor="exampleCheck1">   Already Registered?</label>
                            </div>



                        </div>




                    </div>
                </div>



            </div>
        </div>
    );
};

export default Login;