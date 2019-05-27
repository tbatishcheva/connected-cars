import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './FooterMenu.module.css';

class FooterMenu extends Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    return (
      <>
        <ul className={styles.footerMenu}>
          <li>{this.props.title}</li>
          {this.props.children}
        </ul>
      </>
    );
  }
}

export default FooterMenu;
