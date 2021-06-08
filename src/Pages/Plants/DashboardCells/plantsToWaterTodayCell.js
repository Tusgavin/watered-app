import React from 'react';
import { Layout, Text, useTheme, Icon } from '@ui-kitten/components';

import styles from './styles';

const PlantsToWaterTodayIcon = (props) => {
  const theme = useTheme();
  return <Icon {...props} fill={theme['color-info-500']} style={styles.cellIcon} name='droplet' />
};

const PlantsToWaterTodayCell = ({ data }) => {
  const theme = useTheme();
  return (
    <Layout style={[styles.cellContainer, { borderBottomColor: theme['color-info-500']}]}>
      <PlantsToWaterTodayIcon />
      <Text category='h1' style={{ color: theme['color-info-700'], marginLeft: '8%'}}>{data.value}</Text> 
    </Layout>
  );
}

export default PlantsToWaterTodayCell;