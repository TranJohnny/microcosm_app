import React from 'react';
import { Redirect } from 'react-router-dom';

export const Splash = ({ authenticated }) => {
  if (authenticated) return <Redirect to="/home" />;

  return (
    <>
      <svg></svg>
      <h1>Splash Page</h1>
    </>
  );
};
