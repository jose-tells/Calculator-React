import React from 'react';
// Components
import Footer from './Footer';

const Layout = ({ children }) => {

  return(
    <>
      {children}
      <Footer />
    </>
  )
};

export default Layout;