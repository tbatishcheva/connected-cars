import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './FeatureItem.module.css';

class FeatureItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={styles.featureItem}>
        <div>
          <div className={styles.side} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{this.props.title}</div>
          <div className={styles.subtitle}>{this.props.subtitle}</div>
        </div>
      </div>
    );
  }
}

export default FeatureItem;
