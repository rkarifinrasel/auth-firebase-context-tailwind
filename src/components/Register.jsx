import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProviders';
import { Result } from 'postcss';

const Register = () => {
    const [error,setError]=useState('')
const[success,setSuccess]=useState('')
    
    const{user,createUser}=useContext(AuthContext)
    const handleRegister=event=>{
        event.preventDefault()
        setError()
        setSuccess()
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password)
        createUser(email,password)
        .then(result=>{
            const eUser=result.user;
            console.log(eUser)
            
            form.reset()
        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)

        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
              </div>
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
                  <Link to="/login" className="label-text-alt link link-hover">Already an Account?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
<p>{error}</p>
<p>{success}</p>
          </div>
        </div>
      </div>
    );
};

export default Register;