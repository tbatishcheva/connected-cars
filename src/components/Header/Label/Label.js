import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Label.module.css';

class Label extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={styles.label}>
        <div className={styles.img}>
          <img src={this.props.img} alt={this.props.img} />
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            <div>{this.props.title}</div>
          </div>
          <div className={styles.subtitle}>
            <div>{this.props.subtitle}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Label;
