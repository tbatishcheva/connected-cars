import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FeatureCard.module.css';

class FeatureCard extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    isReverse: PropTypes.bool,
  };

  static defaultProps = {
    isReverse: false,
  }

  render() {
    let reverseStyles = {};
    if (this.props.isReverse) {
      reverseStyles = {
        flexDirection: 'row-reverse',
      };
    }

    return (
      <div
        className={styles.featureCard}
        style={reverseStyles}
      >
        <div className={styles.img}>
          <img src={this.props.img} alt={this.props.img} />
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{this.props.title}</div>
          <div className={styles.subtitle}>{this.props.subtitle}</div>
        </div>
      </div>
    );
  }
}

export default FeatureCard;
