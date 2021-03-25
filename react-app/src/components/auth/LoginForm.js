import React, { useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { login, demoLogin } from '../../services/auth';
import logo from '../logo.png';
import rocket from '../rocket.svg';
import { useHistory } from 'react-router-dom';
import { loadMicroStories } from '../../store/microStory';
import { useDispatch } from 'react-redux';

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();

  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
      dispatch(loadMicroStories(user));
      history.push('/home');
    } else {
      setErrors(user.errors);
    }
  };

  const loginDemo = async (e) => {
    const user = await demoLogin();
    if (!user.errors) {
      setAuthenticated(true);
      dispatch(loadMicroStories(user));
      history.push('/home');
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-around bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <img
          src={rocket}
          style={{ position: 'absolute', zIndex: '2', top: '-10px', left: '-20px' }}
        />
        <div
          className="max-w-md w-full space-y-8 bg-gray-50 bg-opacity-50 rounded-2xl py-5 px-5 ring ring-gray-50 ring-opacity-80"
          style={{ zIndex: '3' }}
        >
          <div>
            <img className="mx-auto h-20 w-auto" src={logo} alt="Logo" />
            <h2 className="mt-1 text-center text-3xl font-extrabold text-gray-900">
              Log in to your account
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
          {errors.length ? (
            <div className="rounded-md bg-red-100 border border-gray-300 px-3 py-2">
              Invalid login credentials
            </div>
          ) : (
            ''
          )}
          <form className="mt-8 space-y-6" onSubmit={onLogin}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={updateEmail}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={updatePassword}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="/sign-up" className="font-medium text-indigo-600 hover:text-indigo-500">
                  New to Microcosm? Sign up here
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
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
