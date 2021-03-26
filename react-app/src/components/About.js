import React from 'react';
import portfolio_pic from './portfolio_pic.jpg';

const About = () => {
  return (
    <>
      <div className="grid grid-cols-3 h-full bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900">
        <div className="col-span-1 grid grid-rows-1 items-center justify-around">
          <div className="row-span-1 flex align-center items-center">
            <img
              className="w-4/5 h-4/5 mx-5 my-5 rounded-full border-4 border-white"
              src={portfolio_pic}
              alt="An image of Johnny Tran"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-center">
          <h1 className="text-6xl font-semibold text-white my-6">Hi there, I'm Johnny!</h1>
          <p className="text-white text-2xl font-semibold my-4 mr-4">
            I'm an actor, community-organizer, and loving partner... oh and I code! I'm passionate
            about storytelling and leveraging collective collaboration to make everything as
            accessible as possible. This app was made using a PostgreSQL Database with a
            Python/Flask backend; and React / Redux on the frontend. I'm always pushing myself to
            explore more complex features integrated with intuitive design. Visit my portfolio to
            learn more about me and my other work!
          </p>

          <a
            href="https://tranjohnny.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl w-1/6 my-8 py-2 text-center font-bold text-indigo hover:bg-indigo-100"
          >
            My Portfolio
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
