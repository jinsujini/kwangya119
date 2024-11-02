import React, { useState, useEffect } from 'react';
import Top from './main/Top';
import Mid from './main/Mid';
import Bot from './main/Bot';
import Menu from './section/Menu';
import Header from './section/Header';
import Footer from './section/Footer';

const Main = () => {
  return (
    <div className='maincontainer container'>
        <Header />
      <Top />
      <Mid />
      <Bot />
      <Menu />
      <Footer />
    </div>
  );
};

export default Main;
