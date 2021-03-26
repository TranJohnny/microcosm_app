import React from 'react';
import '../index.css';

const About = () => {
  return (
    <>
      <div className="grid grid-cols-3 h-full bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900">
        <div className="col-span-1 grid grid-rows-3 items-center justify-around">
          <div className="row-span-2">Hello</div>
          <div className="row-span-1 self-start">Hello</div>
        </div>
        <div className="col-span-2">
          <h1>Hi there, I'm Johnny!</h1>
          <p>
            I'm an actor, community-organizer, and loving partner... oh and I code! I'm passionate
            about storytelling and leveraging collective collaboration to make everything as
            accessible as possible.
          </p>

          <a href="#one" class="button scrolly">
            More About Me
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
