import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerlotty from '../assets/Animation - 1736175999197.json'
import AuthContext from '../context/AuthContext';

const Register = (props) => {


     const {createUser} = useContext(AuthContext);
       
    const handelRegister = e =>{
        e.preventDefault();

        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;

        // password validation

        createUser(email, password)
        .then(result => {
          console.log(result.user)
        })
        .catch(error => {
          console.log(error.massage)
        })

        

    }











    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-[700px]">
           
           <Lottie animationData={registerlotty} ></Lottie>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className='ml-7 mt-4 text-5xl font-bold'>Register now!</h1>
            <form className="card-body" onSubmit={handelRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email'  placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;