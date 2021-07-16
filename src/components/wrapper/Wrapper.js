import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Wrapper.scss';

const Wrapper = ({ children }) => (
  <>
    <Header />
    <section className="main">
      <div className="main-wrapper">
        { children }
      </div>
    </section>
    <Footer />
  </>
);

export default Wrapper;