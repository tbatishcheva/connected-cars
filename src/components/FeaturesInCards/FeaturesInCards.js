import React, { Component } from 'react';
import styles from './FeaturesInCards.module.css';
import Container from '../Container/Container';
import FeatureCard from './FeatureCard/FeatureCard';
import feature1 from './feature1.png';
import feature2 from './feature2.png';

class FeaturesInCards extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.featuresInCardsWrapper}>
        <Container>
          <div className={styles.featuresInCards}>
            <div className={styles.featureCardWrapper}>
              <FeatureCard
                img={feature1}
                title="Lorem ipsum dolor sit amet"
                subtitle={'Sed non ultricies lorem, vitae sagittis ligula. Etiam ex lorem, \n'
              + 'eleifend non commodo vel, molestie eget leo. Duis in nulla \n'
              + 'turpis. Vestibulum at ante id enim varius pellentesque non \n'
              + 'vel risus. Orci varius natoque penatibus et'}
              />
            </div>
            <div className={styles.featureCardWrapper}>
              <FeatureCard
                img={feature2}
                title="Lorem ipsum dolor sit amet"
                subtitle={'Sed non ultricies lorem, vitae sagittis ligula. Etiam ex lorem, \n'
              + 'eleifend non commodo vel, molestie eget leo. Duis in nulla \n'
              + 'turpis. Vestibulum at ante id enim varius pellentesque non \n'
              + 'vel risus. Orci varius natoque penatibus et'}
                isReverse
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default FeaturesInCards;
