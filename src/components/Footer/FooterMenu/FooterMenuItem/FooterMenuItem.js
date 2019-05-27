import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './FooterMenuItem.module.css';

class FooterMenuItem extends Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <>
        <li className={styles.footerMenuItem}><a href={this.props.link}>{this.props.title}</a></li>
      </>
    );
  }
}

export default FooterMenuItem;
