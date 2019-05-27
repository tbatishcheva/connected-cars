import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import Container from '../Container/Container';
import FooterMenu from './FooterMenu/FooterMenu';
import FooterMenuItem from './FooterMenu/FooterMenuItem/FooterMenuItem';

class Footer extends Component {
  static propTypes = {};

  render() {
    const link = 'https://google.com';
    return (
      <div className={styles.footer}>
        <Container>
          <div className={styles.footerWrapper}>

            <div className={styles.formWrapper}>
              <form className={styles.inputForm}>
                <div className={styles.title}>Get the latest Updates</div>
                <div className={styles.subtitle}>We’ll send you updates obout our special offers</div>
                <div className={styles.inputFields}>
                  <input type="text" placeholder="Your email address" />
                  <input type="submit" />
                </div>
              </form>
            </div>

            <div className={styles.contentWrapper}>
              <div className={styles.content}>
                <div className={styles.contacts}>
                  <div className={styles.mailto}>
                    <a href="mailto:sales@email.com">sales@email.com</a>
                  </div>
                  <div className={styles.tel}>
                    <a href="tel:1-877-702-2294">1-877-702-2294</a>
                  </div>
                </div>
                <div>
                  <FooterMenu link={link} title="Explore">
                    <FooterMenuItem link={link} title="Features" />
                    <FooterMenuItem link={link} title="How it works?" />
                    <FooterMenuItem link={link} title="Business" />
                    <FooterMenuItem link={link} title="Help" />
                  </FooterMenu>
                </div>
                <div>
                  <FooterMenu link={link} title="Company">
                    <FooterMenuItem link={link} title="Company" />
                    <FooterMenuItem link={link} title="Press" />
                    <FooterMenuItem link={link} title="Contact" />
                  </FooterMenu>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;
