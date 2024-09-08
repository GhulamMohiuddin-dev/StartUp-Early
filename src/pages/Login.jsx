import React, { useState,useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import login from '../assets/login_image.svg';
import AuthContext from '../authentication/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setTokens } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://api.campusspace.startupearly.com/api/v1/users/token/', {
        username,
        password,
      });
      const { access, refresh } = response.data;
      setTokens(access, refresh);
      navigate('/events');
      toast.success("Logged in successfully!")
    } catch (err) {
      setError('Invalid credentials');
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="flex-1  bg-customBlue text-white flex flex-col justify-center items-center p-10">
        <img src={login} alt="login illustration" className="w-1/2 lg:w-3/4 mb-4" />
        <h1 className="text-3xl lg:text-4xl font-bold mt-8 text-center">Make your own Event</h1>
        <p className="mt-4 text-lg lg:text-xl font-normal text-center max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex-1 bg-white flex justify-center items-center">
        <div className="w-full max-w-md p-8 flex items-center flex-col flex-grow">
          <h2 className="text-2xl lg:text-3xl text-customBlack font-bold mb-2">Sign In</h2>
          <p className="text-gray-600 mb-8 text-center">Enter your details below to access your account</p>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-customBlue text-white p-3 rounded-lg hover:bg-blue-800"
          >
            Sign In
          </button>

          {error && <p className="mt-4 text-red-500">{error}</p>}

          <div className="mt-6 flex justify-center gap-1 w-full">
            <a href="/forgot-password" className="text-gray-600 text-sm">
              Forgot Password?
            </a>
            <a href="/reset-password" className="text-customBlack text-sm">
              Reset Password
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
