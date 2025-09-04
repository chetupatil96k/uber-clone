import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext'; // ✅ imported

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // ✅ Use the correct context
  const { user, setUser } = React.useContext(UserDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);   // ✅ update context
        localStorage.setItem('token',data.token)
        navigate('/home');
      }

      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
    } catch (error) {
      console.error('Signup failed:', error.response?.data || error.message);
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-5"
          src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-base mb-2 font-medium">What's your name</h3>
          <div className="flex gap-3 mb-5">
            <input
              required
              type="text"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-sm placeholder:text-sm"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              type="text"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-sm placeholder:text-sm"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <h3 className="text-base mb-2 font-medium">What's your email?</h3>
          <input
            required
            type="email"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-base mb-2 font-medium">Enter Password</h3>
          <input
            required
            type="password"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
            Create Account
          </button>
        </form>

        <p className="text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600">
            Sign In
          </Link>
        </p>
      </div>

      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{' '}
          <span className="underline">Google policy</span> and{' '}
          <span className="underline">Terms of services apply</span>
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
