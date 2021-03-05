import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signUp, demoLogin } from '../../services/auth';
import logo from '../logo.png';

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(firstName, lastName, username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };
  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const loginDemo = async (e) => {
    const user = await demoLogin();
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-20 w-auto" src={logo} alt="Logo" />
            <h2 className="mt-1 text-center text-3xl font-extrabold text-gray-900">
              Enter the microcosm
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {'Or '}
              <button
                as={'a'}
                onClick={loginDemo}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                demo the site as Maya
              </button>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={onSignUp}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="first-name" className="sr-only">
                  First Name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="First name"
                  value={firstName}
                  onChange={updateFirstName}
                />
              </div>
              <div>
                <label for="last-name" className="sr-only">
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Last name"
                  value={lastName}
                  onChange={updateLastName}
                />
              </div>
              <div>
                <label for="username" className="sr-only">
                  username
                </label>
                <input
                  id="username"
                  name="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={updateUsername}
                />
              </div>
              <div>
                <label for="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={updateEmail}
                />
              </div>
              <div>
                <label for="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="new-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={updatePassword}
                />
              </div>
              <div>
                <label for="confirm-password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autocomplete="new-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm password"
                  value={repeatPassword}
                  onChange={updateRepeatPassword}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Have an account? Log in here
                </a>
              </div>

              <div className="text-sm">
                <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Return home
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="flex items-center absolute left-0 inset-y-0 pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
