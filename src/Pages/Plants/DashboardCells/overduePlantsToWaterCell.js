import React from 'react';
import { Layout, Text, useTheme, Icon } from '@ui-kitten/components';

import styles from './styles';

const OverduePlantsToWaterIcon = (props) => {
   const theme = useTheme();
   return <Icon {...props} fill={theme['color-danger-500']} style={styles.cellIcon} name='alert-triangle' />
 };

const OverduePlantsToWaterCell = ({ data }) => {
   const theme = useTheme();

  return (
     <Layout style={[styles.cellContainer, { borderBottomColor: theme['color-danger-500']}]}>
         <OverduePlantsToWaterIcon />
         <Text category='h1' style={{ color: theme['color-danger-700']}}>{data.value}</Text>
     </Layout>
  );
}

export default OverduePlantsToWaterCell;