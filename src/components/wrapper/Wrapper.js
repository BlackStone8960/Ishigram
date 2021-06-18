import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Wrapper.css';

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