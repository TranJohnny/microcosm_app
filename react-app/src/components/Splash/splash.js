import React from 'react';
import { Redirect } from 'react-router-dom';
import logo from '../logo.png';
import search_space from '../search_space.svg';
import reading_book from '../reading_book.svg';

function Splash({ authenticated }) {
  if (authenticated) return <Redirect to="/home" />;

  return (
    <>
      <div>
        {/* Splash Nav Bar */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 px-4 py-4">
          <div className="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
            <div className="flex justify-between items-center">
              <img src={logo} className="h-20" alt="Logo" />
              <a
                href="/"
                className="inline-block py-2 text-white text-xl font-bold hover:text-red-500"
              >
                Microcosm
              </a>
              <div className="inline-block cursor-pointer md:hidden">
                <div className="bg-gray-400 w-8 mb-2" style={{ height: '2px' }}></div>
                <div className="bg-gray-400 w-8 mb-2" style={{ height: '2px' }}></div>
                <div className="bg-gray-400 w-8" style={{ height: '2px' }}></div>
              </div>
            </div>

            <div>
              <div className="hidden md:block">
                <a
                  href="/about"
                  className="inline-block py-1 md:py-4 text-gray-100 hover:text-red-500 mr-6 font-bold"
                >
                  About
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <a
                href="/login"
                className="inline-block py-1 md:py-4 text-white hover:text-red-500 mr-6"
              >
                Login
              </a>
              <a
                href="/sign-up"
                className="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-red-400 rounded-lg"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 md:overflow-hidden">
          <div className="px-4 py-20 md:py-4">
            <div className="md:max-w-6xl md:mx-auto">
              <div className="md:flex md:flex-wrap">
                <div className="md:w-1/2 text-center md:text-left md:pt-16">
                  <h1 className="font-bold text-white text-2xl md:text-5xl leading-tight mb-6">
                    Short stories: lasting impact. Explore the microCOSMOS!
                  </h1>

                  <p className="text-indigo-200 md:text-xl md:pr-48">
                    Discover the power of micro-stories: tiny narratives distilled down to the very
                    essence of storytelling.
                  </p>

                  <a
                    href="/sign-up"
                    className="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white bg-red-400 hover:bg-red-500 rounded-lg shadow"
                  >
                    Get Started
                  </a>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="hidden md:block">
                    <div
                      className="-ml-24 -mb-40 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-4 py-8"
                      style={{ transform: 'rotate(-8deg)' }}
                    >
                      <div className="text-gray-800 text-center">
                        Once upon a time, <br />
                        in a land far away...
                      </div>
                    </div>

                    <div
                      className="ml-24 mb-16 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
                      style={{ transform: 'rotate(-8deg)', zIndex: '2' }}
                    >
                      <div className="text-gray-800 text-center">
                        David: <br />
                        I think- <br />
                        {''} <br />
                        Alexis: <br />
                        Ewwww!
                      </div>
                    </div>

                    <div
                      className="ml-32 absolute left-0 bottom-0 w-48 bg-white rounded-lg shadow-lg px-1 py-8 flex justify-center"
                      style={{ transform: 'rotate(-8deg)', zIndex: '2', marginBottom: '-220px' }}
                    >
                      <div className="text-gray-800 text-center">
                        <img
                          src={reading_book}
                          className="h-24"
                          alt="Illustration of reading a book"
                        />
                        ____ <span className="font-black">____</span> ____ ____ <br />
                        {''} <br />
                        Where could we go
                        <br />
                        now...?
                      </div>
                    </div>
                    {/* image card */}
                    <div
                      className="mt-10 w-full absolute right-0 top-0 flex rounded-lg bg-white overflow-hidden shadow-lg"
                      style={{ transform: 'rotate(-8deg)', marginRight: '-250px', zIndex: '1' }}
                    >
                      <div className="w-32 bg-gray-200" style={{ height: '560px' }}></div>
                      <div className="flex-1 p-6">
                        <h2 className="text-lg text-gray-700 font-bold mb-3">Discover Users</h2>
                        <div className="flex mb-5">
                          <div className="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                            <div className="p-1 rounded-full bg-gray-300"></div>
                          </div>
                          <div className="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                            <div className="p-1 rounded-full bg-gray-300"></div>
                          </div>
                          <div className="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                            <div className="p-1 rounded-full bg-gray-300"></div>
                          </div>
                          <div className="w-16 rounded-full bg-gray-100 py-2 px-4">
                            <div className="p-1 rounded-full bg-gray-300"></div>
                          </div>
                        </div>

                        <div className="flex flex-wrap -mx-4 mb-5 justify-center">
                          <img
                            src={search_space}
                            className="h-48"
                            alt="Illustration of reading a book in space"
                          />
                        </div>

                        <h2 className="text-lg text-gray-700 font-bold mb-3">Explore stories</h2>

                        <div className="w-full flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                          <div className="w-1/3">
                            <div className="flex">
                              <div className="h-8 w-8 rounded bg-gray-200 mr-4"></div>
                              <div>
                                <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                                <div className="h-2 w-10 bg-gray-100 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="w-16 rounded-full bg-green-100 py-2 px-4 mx-auto">
                              <div className="p-1 rounded-full bg-green-200"></div>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="h-2 w-10 bg-gray-100 rounded-full mx-auto"></div>
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                          <div className="w-1/3">
                            <div className="flex">
                              <div className="h-8 w-8 rounded bg-gray-200 mr-4"></div>
                              <div>
                                <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                                <div className="h-2 w-10 bg-gray-100 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="w-16 rounded-full bg-orange-100 py-2 px-4 mx-auto">
                              <div className="p-1 rounded-full bg-orange-200"></div>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="h-2 w-16 bg-gray-100 rounded-full mx-auto"></div>
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                          <div className="w-1/3">
                            <div className="flex">
                              <div className="h-8 w-8 rounded bg-gray-200 mr-4"></div>
                              <div>
                                <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                                <div className="h-2 w-10 bg-gray-100 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="w-16 rounded-full bg-blue-100 py-2 px-4 mx-auto">
                              <div className="p-1 rounded-full bg-blue-200"></div>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="h-2 w-8 bg-gray-100 rounded-full mx-auto"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end section */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <svg
              className="hidden md:block"
              viewBox="0 0 500 100"
              preserveAspectRatio="none"
              style={{ height: '100%', width: '100%' }}
              position="absolute"
            >
              <path
                d="M-60.66,70.55 C149.99,150.00 375.00,-6.41 596.22,7.41 L500.00,150.00 L0.00,150.00 Z"
                style={{ stroke: 'none', fill: 'white' }}
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-between" style={{ position: 'relative', bottom: '-30px' }}>
        <p className="text-left p-4 text-gray-600 pt-10">
          {'An app by '}
          <a
            className="text-blue-500"
            href="https://www.linkedin.com/in/thejohnnytran/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @JohnnyTran
          </a>
        </p>
        <p className="text-right p-4 text-gray-600 pt-10">
          {'SVGs modified from '}
          <a
            className="text-blue-500"
            href="https://twitter.com/ninaLimpi"
            target="_blank"
            rel="noopener noreferrer"
          >
            @NinaLimpi
          </a>
          {'  | Landing page inspired by designs from '}
          <a
            className="text-blue-500"
            href="https://twitter.com/mithicher"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mithicher
          </a>
        </p>
      </div>
    </>
  );
}

export default Splash;
