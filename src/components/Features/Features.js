import React, { Component } from 'react';
import styles from './Features.module.css';
import Container from '../Container/Container';
import feature from './feature.png';
import FeatureItem from './FeatureItem/FeatureItem';

class Features extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.featuresWrapper}>
        <Container>
          <div className={styles.feature}>
            <div className={styles.img}>
              <img src={feature} alt="Feature" />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>Features to make you love us more</div>
              <div className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt
              </div>
              <div className={styles.featureItemsWrapper}>
                <FeatureItem
                  title="Family Tracking"
                  subtitle={'Gives you peace of mind knowing \n'
                  + 'where and when your family or business \n'
                  + 'vehicles are travelling.'}
                />
                <FeatureItem
                  title="Geo-fencing"
                  subtitle="Receive an alert if your loved ones or car leaves a designated area."
                />
                <FeatureItem
                  title="Mobile Device Tracking"
                  subtitle={'Lorem ipsum dolor sit amet, consectetur \n'
                  + 'elit, sed do eiusmod tempor incididunt'}
                />
                <FeatureItem
                  title="Behavioral Data"
                  subtitle="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt"
                />
                <FeatureItem
                  title="Driving notifications"
                  subtitle="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt"
                />
                <FeatureItem
                  title="Trip tracking"
                  subtitle="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt"
                />
              </div>
            </div>
          </div>
        </Container>

      </div>
    );
  }
}

export default Features;
