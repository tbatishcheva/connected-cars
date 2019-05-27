import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MainMenu.module.css';

class MainMenu extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <>
        <ul className={styles.mainMenu}>
          {this.props.children}
        </ul>
      </>
    );
  }
}

export default MainMenu;
