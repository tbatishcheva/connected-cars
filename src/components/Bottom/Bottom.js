import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Bottom.module.css';
import Container from '../Container/Container';
import flag from './flag.png';

class Bottom extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.bottomWrapper}>
        <Container>
          <div className={styles.bottom}>
            <div className={styles.language}>
              <div className={styles.img}><img src={flag} alt="Flag" /></div>
              <div className={styles.country}>Canada</div>
            </div>
            <div className={styles.businessInfo}>
              <div className={styles.businessItem}>2018 Business. All Rights Reserverd.</div>
              <div className={styles.businessItem}>Privacy Policy</div>
              <div className={styles.businessItem}>Terms and Conditions</div>
            </div>

          </div>
        </Container>
      </div>
    );
  }
}

export default Bottom;
