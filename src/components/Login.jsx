import React from 'react'

import { useState } from 'react';
import { useAuth } from '../config/authProvider';

const Login = () => {
    const {login, loading } = useAuth();
    const [email, setEmail] =useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(email, password);
        console.log(result,'My result')
        if(!result.success){
            setError(result.message);
        }
    };


  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='w-full max-w-md bg-white rounded-lg shadow-md p-8'>
            <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
            <form  onSubmit={handleSubmit} className='space-y-5'>
                {error && <p className='text-red-500 text-center'>{error}</p>}
                <input
                 type="email"
                 placeholder='Email'
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
                 className='w-full px-4 py-2 border rounded'
                 />
                <input
                 type="password"
                 placeholder='Password'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required
                 className='w-full px-4 py-2 border rounded'
                  />
                  <button
                  type='submit'
                  disabled={loading}
                  className='w-full bg-blue-600 text-white py-2 rounded'>
                    {loading ? "Logging in...":"Login"}
                  </button>
            </form>

        </div>
    </div>
   
  );
};

export default Login;
