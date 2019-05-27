import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './MainMenuItem.module.css';

class MainMenuItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };

  render() {
    return (
      <>
        <li className={styles.mainMenuItem}><a href={this.props.link}>{this.props.title}</a></li>
      </>
    );
  }
}

export default MainMenuItem;
