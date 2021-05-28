import React from 'react';
import { Layout, Text, List, ListItem } from '@ui-kitten/components';

import styles from './styles';

const fakeActivityData = new Array(10).fill({
   title: 'Plant Update',
   description: 'You watered your plants today'
});

const renderItemActivity = ({ item, index }) => (
   <ListItem
      key={index}
      title={item.title}
      description={item.description}
    />
);

const Activity = () => {
  return (
   <Layout style={styles.activityMainContainer}>
      <Layout style={styles.activityTitleContainer} >
         <Text category='h6'> Your Activity </Text>
      </Layout>
      <List
      data={fakeActivityData}
      renderItem={renderItemActivity}
      />
   </Layout>
  );
}

export default Activity;