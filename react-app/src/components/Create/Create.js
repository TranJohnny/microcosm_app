import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MicroStoryForm from './MicroStoryForm.js';

const Create = () => {
  const currentUser = useSelector((state) => state.user);

  return (
    <>
      <div className="h-full bg-indigo-50">
        <MicroStoryForm stories={Object.values(currentUser.stories)} user={currentUser} />
      </div>
    </>
  );
};

export default Create;
