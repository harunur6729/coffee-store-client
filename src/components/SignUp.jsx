import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Poroviders/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = e =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password,name)

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log('user created at firebase ', user)
            const createdAt = result?.user?.metadata?.creationTime;
            const newUser = {name, email, createdAt}
            //save new user info to the database 
            fetch('http://localhost:5000/users',{
                method:'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(newUser)
            })
            .then(res=>res.json())
            .then(data =>{
                console.log('user created to db', data)
            })
            console.log(user);
        })
        .then(error =>{
           console.log(error)
        })
    }
    return (
        
          <div className='flex justify-center  items-center min-h-screen bg-slate-200'>
          <form className='w-1/2 ' onSubmit={handleSignUp}>
          <h1 className='text-center text-3xl font-bold text-black p-5'>Sing UP</h1>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input  type="text" className="input w-full " placeholder="Name " name='name' />
                <label className="fieldset-label">Email</label>
                <input type="email" className="input w-full" placeholder="Email" name='email' />
                <label className="fieldset-label">Password</label>
                <input type="password" className="input w-full" placeholder="Password" name='password' />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">SignUp</button>
              </fieldset>
            </div>
          </div>
          </form>
          </div>
          
    
    );
};

export default SignUp;