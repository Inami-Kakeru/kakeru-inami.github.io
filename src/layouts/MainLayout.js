import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <main className="container-custom section-padding">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout; 