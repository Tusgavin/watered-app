import React from 'react';
import { Layout, Text, List, ListItem, Icon, useTheme } from '@ui-kitten/components';

import styles from './styles';

const renderWateredActivityIcon = (props) => {
   const theme = useTheme();
   return <Icon {...props} fill={theme['color-info-400']} name='droplet-outline' />
};

const renderAddedActivityIcon = (props) => {
   const theme = useTheme();
   return <Icon {...props} fill={theme['color-success-400']} name='plus-square-outline' />
};

const renderRemovedActivityIcon = (props) => {
   const theme = useTheme();
   return <Icon {...props} fill={theme['color-danger-400']} name='trash-outline' />
};

const fakeWateredActivity = new Array(3).fill({
   title: 'Watered Plant',
   description: 'You watered your plant `plant_name` at `DD/MM/YY HH:MM`',
   icon: renderWateredActivityIcon
});

const fakeAddedActivity = new Array(3).fill({
   title: 'Added Plant',
   description: 'You added a new plant plant to your collection: `plant_name`',
   icon: renderAddedActivityIcon
});

const fakeRemovedActivity = new Array(3).fill({
   title: 'Removed Plant',
   description: 'You removed a plant from your collection: `plant_name`',
   icon: renderRemovedActivityIcon
});

const fakeActivityData = [...fakeWateredActivity, ...fakeAddedActivity, ...fakeRemovedActivity];

const renderItemActivity = ({ item, index }) => (
   <ListItem
      key={index}
      title={item.title}
      description={item.description}
      accessoryRight={item.icon}
    />
);

const Activity = () => {
   const theme = useTheme();

   return (
      <Layout  style={
         styles.activityMainContainer}>
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