import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProviders';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)

    const handleLogOut=()=>{
logOut()
.then(result=>{
    console.log(result)
})
.catch(error=>{
    console.log(error.message)
})
   

    }
    return (
       
            <div className="navbar bg-primary text-primary-content">
  <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
  <Link className="btn btn-ghost normal-case text-xl"  to='/'>Home</Link>
 {
    user &&
    <Link className="btn btn-ghost normal-case text-xl"  to='/profile'>Profile</Link>
 }
  <Link className="btn btn-ghost normal-case text-xl"  to='/order'>Order</Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
  {
    user?
    <>
    <span>{user.email}</span>
    <button onClick={handleLogOut} className="btn btn-xs">Sign Out</button>
    </>
    :<Link to='/login'><button className='btn btn-xs'>Login</button></Link>
  }
</div>
        
    );
};

export default Header;