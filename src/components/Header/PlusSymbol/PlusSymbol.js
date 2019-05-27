import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlusSymbol.module.css';

class PlusSymbol extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
  };

  render() {
    const colorStyles = {
      backgroundColor: this.props.backgroundColor,
      color: this.props.textColor,
    };
    return (
      <div
        className={styles.plusSymbol}
        style={colorStyles}
      >
+
      </div>
    );
  }
}

export default PlusSymbol;
