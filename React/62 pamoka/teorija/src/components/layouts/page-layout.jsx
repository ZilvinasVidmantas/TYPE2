import React from 'react';
import Navbar from '../partials/navbar';

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default PageLayout;
