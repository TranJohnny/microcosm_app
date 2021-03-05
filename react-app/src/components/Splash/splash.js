import React from 'react';
import { Redirect } from 'react-router-dom';

function Splash({ authenticated }) {
  if (authenticated) return <Redirect to="/home" />;

  return (
    <>
      <div>
        <div class="bg-indigo-600 px-4 py-4">
          <div class="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
            <div class="flex justify-between items-center">
              <img src="/images/logo.png" className="h-20" alt="Logo" />
              <a href="/" class="inline-block py-2 text-white text-xl font-bold">
                Microcosm
              </a>
              <div class="inline-block cursor-pointer md:hidden">
                <div class="bg-gray-400 w-8 mb-2" style={{ height: '2px' }}></div>
                <div class="bg-gray-400 w-8 mb-2" style={{ height: '2px' }}></div>
                <div class="bg-gray-400 w-8" style={{ height: '2px' }}></div>
              </div>
            </div>

            <div>
              <div class="hidden md:block">
                <a href="/about" class="inline-block py-1 md:py-4 text-gray-100 mr-6 font-bold">
                  About Us
                </a>
              </div>
            </div>
            <div class="hidden md:block">
              <a
                href="/login"
                class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100 mr-6"
              >
                Login
              </a>
              <a
                href="/sign-up"
                class="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>

        <div class="bg-indigo-600 md:overflow-hidden">
          <div class="px-4 py-20 md:py-4">
            <div class="md:max-w-6xl md:mx-auto">
              <div class="md:flex md:flex-wrap">
                <div class="md:w-1/2 text-center md:text-left md:pt-16">
                  <h1 class="font-bold text-white text-2xl md:text-5xl leading-tight mb-6">
                    Quick stories: lasting impact. Explore the microCOSMOS!
                  </h1>

                  <p class="text-indigo-200 md:text-xl md:pr-48">
                    Discover the power of micro-stories: tiny narratives distilled down to the very
                    essence of storytelling.
                  </p>

                  <a
                    href="/sign-up"
                    class="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white bg-red-400 hover:bg-red-500 rounded-lg shadow"
                  >
                    Get Started
                  </a>
                </div>
                <div class="md:w-1/2 relative">
                  <div class="hidden md:block">
                    <div
                      class="-ml-24 -mb-40 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
                      style={{ transform: 'rotate(-8deg)' }}
                    >
                      <div class="text-gray-800 text-center">
                        On a dark and <br />
                        stormy night...
                      </div>
                    </div>

                    <div
                      class="ml-24 mb-16 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
                      style={{ transform: 'rotate(-8deg)', zIndex: '2' }}
                    >
                      <div class="text-gray-800 text-center">Banking Services</div>
                    </div>

                    <div
                      class="ml-32 absolute left-0 bottom-0 w-48 bg-white rounded-lg shadow-lg px-10 py-8"
                      style={{ transform: 'rotate(-8deg)', zIndex: '2', marginBottom: '-220px' }}
                    >
                      <div class="text-gray-800 text-center">
                        ...of the night <br />
                        ...of the night <br />
                        ...of the night <br />
                        Internet
                      </div>
                    </div>

                    <div
                      class="mt-10 w-full absolute right-0 top-0 flex rounded-lg bg-white overflow-hidden shadow-lg"
                      style={{ transform: 'rotate(-8deg)', marginRight: '-250px', zIndex: '1' }}
                    >
                      <div class="w-32 bg-gray-200" style={{ height: '560px' }}></div>
                      <div class="flex-1 p-6">
                        <h2 class="text-lg text-gray-700 font-bold mb-3">Discover Users</h2>
                        <div class="flex mb-5">
                          <div class="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                            <div class="p-1 rounded-full bg-gray-300"></div>
                          </div>
                          <div class="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                            <div class="p-1 rounded-full bg-gray-300"></div>
                          </div>
                          <div class="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                            <div class="p-1 rounded-full bg-gray-300"></div>
                          </div>
                          <div class="w-16 rounded-full bg-gray-100 py-2 px-4">
                            <div class="p-1 rounded-full bg-gray-300"></div>
                          </div>
                        </div>

                        <div class="flex flex-wrap -mx-4 mb-5">
                          <div class="w-1/3 px-4">
                            <div class="h-40 rounded-lg bg-white shadow-lg p-6">
                              <div class="w-16 h-16 rounded-full bg-gray-200 mb-6"></div>
                              <div class="h-2 w-16 bg-gray-200 mb-2 rounded-full"></div>
                              <div class="h-2 w-10 bg-gray-200 rounded-full"></div>
                            </div>
                          </div>
                          <div class="w-1/3 px-4">
                            <div class="h-40 rounded-lg bg-white shadow-lg p-6">
                              <div class="w-16 h-16 rounded-full bg-gray-200 mb-6"></div>
                              <div class="h-2 w-16 bg-gray-200 mb-2 rounded-full"></div>
                              <div class="h-2 w-10 bg-gray-200 rounded-full"></div>
                            </div>
                          </div>
                          <div class="w-1/3 px-4">
                            <div class="h-40 rounded-lg bg-white shadow-lg p-6">
                              <div class="w-16 h-16 rounded-full bg-gray-200 mb-6"></div>
                              <div class="h-2 w-16 bg-gray-200 mb-2 rounded-full"></div>
                              <div class="h-2 w-10 bg-gray-200 rounded-full"></div>
                            </div>
                          </div>
                        </div>

                        <h2 class="text-lg text-gray-700 font-bold mb-3">Explore stories</h2>

                        <div class="w-full flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                          <div class="w-1/3">
                            <div class="flex">
                              <div class="h-8 w-8 rounded bg-gray-200 mr-4"></div>
                              <div>
                                <div class="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                                <div class="h-2 w-10 bg-gray-100 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/3">
                            <div class="w-16 rounded-full bg-green-100 py-2 px-4 mx-auto">
                              <div class="p-1 rounded-full bg-green-200"></div>
                            </div>
                          </div>
                          <div class="w-1/3">
                            <div class="h-2 w-10 bg-gray-100 rounded-full mx-auto"></div>
                          </div>
                        </div>

                        <div class="flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                          <div class="w-1/3">
                            <div class="flex">
                              <div class="h-8 w-8 rounded bg-gray-200 mr-4"></div>
                              <div>
                                <div class="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                                <div class="h-2 w-10 bg-gray-100 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/3">
                            <div class="w-16 rounded-full bg-orange-100 py-2 px-4 mx-auto">
                              <div class="p-1 rounded-full bg-orange-200"></div>
                            </div>
                          </div>
                          <div class="w-1/3">
                            <div class="h-2 w-16 bg-gray-100 rounded-full mx-auto"></div>
                          </div>
                        </div>

                        <div class="flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                          <div class="w-1/3">
                            <div class="flex">
                              <div class="h-8 w-8 rounded bg-gray-200 mr-4"></div>
                              <div>
                                <div class="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                                <div class="h-2 w-10 bg-gray-100 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/3">
                            <div class="w-16 rounded-full bg-blue-100 py-2 px-4 mx-auto">
                              <div class="p-1 rounded-full bg-blue-200"></div>
                            </div>
                          </div>
                          <div class="w-1/3">
                            <div class="h-2 w-8 bg-gray-100 rounded-full mx-auto"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="w-full absolute left-0 bottom-0 ml-1"
                      style={{ transform: 'rotate(-8deg)', zIndex: '1', marginBottom: '-360px' }}
                    >
                      <div class="grid--gray h-48 w-48"></div>
                    </div>
                  </div>

                  <div class="md:hidden w-full absolute right-0 top-0 flex rounded-lg bg-white overflow-hidden shadow">
                    <div class="h-4 bg-gray-200 absolute top-0 left-0 right-0 rounded-t-lg flex items-center">
                      <span class="h-2 w-2 rounded-full bg-red-500 inline-block mr-1 ml-2"></span>
                      <span class="h-2 w-2 rounded-full bg-orange-400 inline-block mr-1"></span>
                      <span class="h-2 w-2 rounded-full bg-green-500 inline-block mr-1"></span>
                    </div>
                    <div class="w-32 bg-gray-100 px-2 py-8" style={{ height: '340px' }}>
                      <div class="h-2 w-16 bg-gray-300 rounded-full mb-4"></div>
                      <div class="flex items-center mb-4">
                        <div class="h-5 w-5 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
                        <div>
                          <div class="h-2 w-10 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>

                      <div class="h-2 w-16 bg-gray-200 rounded-full mb-2"></div>
                      <div class="h-2 w-10 bg-gray-200 rounded-full mb-2"></div>
                      <div class="h-2 w-20 bg-gray-200 rounded-full mb-2"></div>
                      <div class="h-2 w-6 bg-gray-200 rounded-full mb-2"></div>
                      <div class="h-2 w-16 bg-gray-200 rounded-full mb-2"></div>
                      <div class="h-2 w-10 bg-gray-200 rounded-full mb-2"></div>
                      <div class="h-2 w-20 bg-gray-200 rounded-full mb-2"></div>
                      <div class="h-2 w-6 bg-gray-200 rounded-full mb-2"></div>
                    </div>
                    <div class="flex-1 px-4 py-8">
                      <h2 class="text-xs text-gray-700 font-bold mb-1">Popular Payments</h2>
                      <div class="flex mb-5">
                        <div class="p-2 w-12 rounded-full bg-gray-100 mr-2"></div>
                        <div class="p-2 w-12 rounded-full bg-gray-100 mr-2"></div>
                        <div class="p-2 w-12 rounded-full bg-gray-100 mr-2"></div>
                        <div class="p-2 w-12 rounded-full bg-gray-100 mr-2"></div>
                      </div>

                      <div class="flex flex-wrap -mx-2 mb-5">
                        <div class="w-1/3 px-2">
                          <div class="p-3 rounded-lg bg-white shadow">
                            <div class="w-6 h-6 rounded-full bg-gray-200 mb-2"></div>
                            <div class="h-2 w-10 bg-gray-200 mb-1 rounded-full"></div>
                            <div class="h-2 w-6 bg-gray-200 rounded-full"></div>
                          </div>
                        </div>
                        <div class="w-1/3 px-2">
                          <div class="p-3 rounded-lg bg-white shadow">
                            <div class="w-6 h-6 rounded-full bg-gray-200 mb-2"></div>
                            <div class="h-2 w-10 bg-gray-200 mb-1 rounded-full"></div>
                            <div class="h-2 w-6 bg-gray-200 rounded-full"></div>
                          </div>
                        </div>
                        <div class="w-1/3 px-2">
                          <div class="p-3 rounded-lg bg-white shadow">
                            <div class="w-6 h-6 rounded-full bg-gray-200 mb-2"></div>
                            <div class="h-2 w-10 bg-gray-200 mb-1 rounded-full"></div>
                            <div class="h-2 w-6 bg-gray-200 rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      <h2 class="text-xs text-gray-700 font-bold mb-1">Popular Payments</h2>

                      <div class="w-full flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                        <div class="w-1/3">
                          <div class="flex">
                            <div class="h-5 w-5 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                            <div>
                              <div class="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                              <div class="h-2 w-10 bg-gray-100 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <div class="w-1/3">
                          <div class="w-16 rounded-full bg-green-100 py-2 px-4 mx-auto">
                            <div class="p-1 rounded-full bg-green-200"></div>
                          </div>
                        </div>
                        <div class="w-1/3">
                          <div class="h-2 w-10 bg-gray-100 rounded-full mx-auto"></div>
                        </div>
                      </div>

                      <div class="flex flex-wrap justify-between items-center py-3">
                        <div class="w-1/3">
                          <div class="flex">
                            <div class="h-5 w-5 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                            <div>
                              <div class="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                              <div class="h-2 w-10 bg-gray-100 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <div class="w-1/3">
                          <div class="w-16 rounded-full bg-orange-100 py-2 px-4 mx-auto">
                            <div class="p-1 rounded-full bg-orange-200"></div>
                          </div>
                        </div>
                        <div class="w-1/3">
                          <div class="h-2 w-16 bg-gray-100 rounded-full mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="mr-3 md:hidden absolute right-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-10 py-6"
                    style={{ zIndex: '2', marginBottom: '-380px' }}
                  >
                    <div class="bg-indigo-800 mx-auto rounded-lg w-20 pt-3 mb-12 relative">
                      <div class="h-3 bg-white"></div>

                      <div class="text-right my-2">
                        <div class="inline-flex w-3 h-3 rounded-full bg-white -mr-2"></div>
                        <div class="inline-flex w-3 h-3 rounded-full bg-indigo-800 border-2 border-white mr-2"></div>
                      </div>

                      <div class="-ml-4 -mb-6 absolute left-0 bottom-0 w-16 bg-green-700 mx-auto rounded-lg pb-2 pt-3">
                        <div class="h-2 bg-white mb-2"></div>
                        <div class="h-2 bg-white w-6 ml-auto rounded mr-2"></div>
                      </div>
                    </div>

                    <div class="text-gray-800 text-center text-sm">
                      Payment for <br />
                      Internet
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: '100%', width: '100%' }}
          >
            <path
              d="M-60.66,70.55 C149.99,150.00 375.00,-6.41 596.22,7.41 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: 'none', fill: 'white' }}
            ></path>
          </svg>
        </div>

        <p class="text-right p-4 text-gray-600 pt-10">
          {'Landing page inspired by designs from '}
          <a class="border-b text-blue-500" href="https://twitter.com/mithicher" target="_blank">
            @mithicher
          </a>
        </p>
      </div>
    </>
  );
}

export default Splash;
