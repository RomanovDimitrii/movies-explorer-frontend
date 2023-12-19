import React from 'react';

import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import './Main.css';

function Main({ isMenuOpen, onCloseMenu, onMenu, isLoggedIn }) {
  return (
    <>
      <NavTab
        isLoggedIn={isLoggedIn}
        isHeaderBlue={true}
        isMenuOpen={isMenuOpen}
        onMenu={onMenu}
        onCloseMenu={onCloseMenu}
        currentPage="main"
      />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
