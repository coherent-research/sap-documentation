import React from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'For All User Types',
    Icon: 'Users',
    description: (
      <>
        Whether you're a standard user, organization administrator, or system
        administrator, this guide has everything you need to use SAP effectively.
      </>
    ),
  },
  {
    title: 'Complete Device Management',
    Icon: 'Device',
    description: (
      <>
        Learn how to add, configure, and manage devices and gateways.
        Includes troubleshooting guides and best practices for optimal performance.
      </>
    ),
  },
  {
    title: 'Step-by-Step Instructions',
    Icon: 'Guide',
    description: (
      <>
        Clear, detailed instructions with screenshots and examples.
        From basic navigation to advanced bulk operations and system administration.
      </>
    ),
  },
];

function Feature({title, Icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon} role="img">{Icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}