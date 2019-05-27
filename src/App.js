import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import FeaturesInCards from './components/FeaturesInCards/FeaturesInCards';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Download from './components/Download/Download';
import Bottom from './components/Bottom/Bottom';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header />
        <FeaturesInCards />
        <Features />
        <Download />
        <Footer />
        <Bottom />
      </div>
    );
  }
}

export default App;
