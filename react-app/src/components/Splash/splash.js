import React from 'react';
import { Redirect } from 'react-router-dom';

export const Splash = ({ authenticated }) => {
  if (authenticated) return <Redirect to="/home" />;

  return (
    <>
      <h1>Hi</h1>
      <h1>Splash</h1>
    </>
  );
};
