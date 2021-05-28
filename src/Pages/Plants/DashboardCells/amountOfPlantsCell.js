import React from 'react';
import { Layout, Text, useTheme, Icon } from '@ui-kitten/components';

import styles from './styles';

const AmountOfPlantsIcon = (props) => {
  const theme = useTheme();
  return <Icon {...props} fill={theme['color-success-500']} style={styles.cellIcon} name='book-open' />
};

const AmountOfPlantsCell = ({ data }) => {
  const theme = useTheme();

  return (
    <Layout style={[styles.cellContainer, { borderBottomColor: theme['color-success-500'] }]}>
      <AmountOfPlantsIcon />
      <Text category='h1' style={{ color: theme['color-success-700']}}>{data.value}</Text>
    </Layout>
  );
}

export default AmountOfPlantsCell;