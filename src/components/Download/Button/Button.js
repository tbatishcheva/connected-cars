import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

class Button extends Component {
  static propTypes = {
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };

  render() {
    return (
      <a href={this.props.link} className={styles.button}>
        <div className={styles.img}>
          <img src={this.props.img} alt={this.props.img} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{this.props.title}</div>
          <div className={styles.subtitle}>{this.props.subtitle}</div>
        </div>
      </a>
    );
  }
}

export default Button;
