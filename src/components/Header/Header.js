import React, { Component } from 'react';
import styles from './Header.module.css';
import Container from '../Container/Container';
import MainMenu from './MainMenu/MainMenu';
import MainMenuItem from './MainMenu/MainMenuItem/MainMenuItem';
import toyota from './toyota.png';
import PlusSymbol from './PlusSymbol/PlusSymbol';
import motor from './motor.svg';
import Label from './Label/Label';

class Header extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.headerWrapper}>
        <Container>
          <div className={styles.header}>
            <div className={styles.MenuWrapper}>
              <MainMenu>
                <MainMenuItem title="Devices" link="https://google.com" />
                <MainMenuItem title="Plans" link="https://google.com" />
                <MainMenuItem title="Find Store" link="https://google.com" />
                <MainMenuItem title="Contact" link="https://google.com" />
              </MainMenu>
            </div>
            <div className={styles.titleWrapper}>
              <div className={styles.title}>Connected Car Assistant</div>
              <div className={styles.subtitle}>
              Monitor your driving behaivour,
              track the location of your cars in real time and get performance notifications.
              </div>
            </div>
            <div className={styles.image}>
              <div className={styles.imageWrapper}>
                <img src={toyota} alt="Toyota" />
                <div className={styles.plusSymbolWrapper1}>
                  <div className={styles.labelWrapper}><Label img={motor} title="Engine " subtitle="Battery: Good" /></div>
                  <PlusSymbol backgroundColor="#E76959" textColor="#ffffff" />
                </div>
                <div className={styles.plusSymbolWrapper2}>
                  <div className={styles.labelWrapper}><Label img={motor} title="Engine " subtitle="Battery: Good" /></div>
                  <PlusSymbol backgroundColor="#E76959" textColor="#ffffff" />
                </div>
                <div className={styles.plusSymbolWrapper3}>
                  <div className={styles.labelWrapper}><Label img={motor} title="Engine " subtitle="Battery: Good" /></div>
                  <PlusSymbol backgroundColor="#E76959" textColor="#ffffff" />
                </div>
                <div className={styles.plusSymbolWrapper4}>
                  <div className={styles.labelWrapper}><Label img={motor} title="Engine " subtitle="Battery: Good" /></div>
                  <PlusSymbol backgroundColor="#E76959" textColor="#ffffff" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

    );
  }
}

export default Header;
