import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Download.module.css';
import Container from '../Container/Container';
import download from './download.png';
import Button from './Button/Button';

class Download extends Component {
  static propTypes = {};

  render() {
    const link = 'https://google.com';
    return (
      <div className={styles.downloadWrapper}>
        <Container>
          <div className={styles.download}>
            <div className={styles.content}>
              <div className={styles.title}>Available for your smartphone</div>
              <div className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur
                elit, sed do eiusmod tempor incididunt
              </div>
              <div className={styles.buttonWrapper}>
                <div className={styles.oneButtonWrapper}>
                  <Button link={link} title="Get it on" subtitle="Google Play" />
                </div>
                <div className={styles.oneButtonWrapper}>
                  <Button link={link} title="Download on the" subtitle="App Store" />
                </div>
              </div>
            </div>
            <div className={styles.img}>
              <img src={download} alt="Download" />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Download;
