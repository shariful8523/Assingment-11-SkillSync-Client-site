import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import singin from '../assets/Animation - 1736255831679.json';
import AuthContext from '../context/AuthContext';
import SocialLogin from './SocialLogin';

const SingIn = () => {
         
    const {singInUser} = useContext(AuthContext);



    const handelSingIn = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log({ email, password });

        // Password validation logic if needed

        singInUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-[700px]">
                    <Lottie animationData={singin} loop={true} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className='ml-9 mt-4 text-5xl font-bold'>Login now</h1>
                    <form className="card-body" onSubmit={handelSingIn}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login </button>
                        </div>
                    </form>
                                    <SocialLogin></SocialLogin>

                </div>
            </div>
            
        </div>
    );
};

export default SingIn;
