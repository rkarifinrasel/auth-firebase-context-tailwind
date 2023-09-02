import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProviders';
import { Result } from 'postcss';

const Login = () => {

const{signInUser,googleSignIn}=useContext(AuthContext)
const [error,setError]=useState('')
const[success,setSuccess]=useState('')
    


    const handleLogin=event=>{
        event.preventDefault()
        setError()
        setSuccess()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        signInUser(email,password)
        .then(result=>{
            const signUser=result.user;
            console.log(signUser)
            form.reset()
        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
        })
    }

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password'placeholder="password" className="input input-bordered" required />
                <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <label className="label">
                  <Link to="/register" className="label-text-alt link link-hover m-4 ml-6">New to Auth Master ? Please Register</Link>
                 
                </label>
                <button onClick={handleGoogleSignIn} className="btn btn-active btn-accent">Google with sign in</button>
               <div className='m-4 ml-6' >
               <p className='text-green-600'>{success}</p>
                  <p className='text-red-600' >{error}</p>
               </div>
          </div>
        </div>
      </div>
    );
};

export default Login;