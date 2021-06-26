import React from 'react';
import {
  Layout, Text, useTheme, Icon,
} from '@ui-kitten/components';
import PropTypes from 'prop-types';

import styles from './styles';

const PlantsToWaterTodayIcon = () => {
  const theme = useTheme();
  return <Icon fill={theme['color-info-500']} style={styles.cellIcon} name="droplet" />;
};

const PlantsToWaterTodayCell = ({ data }) => {
  const theme = useTheme();
  return (
    <Layout style={[styles.cellContainer, { borderBottomColor: theme['color-info-500'] }]}>
      <PlantsToWaterTodayIcon />
      <Text category="h1" style={{ color: theme['color-info-700'], marginLeft: '8%' }}>{data.value}</Text>
    </Layout>
  );
};

PlantsToWaterTodayCell.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.string,
  }),
};

PlantsToWaterTodayCell.defaultProps = {
  data: {
    value: 'Valor',
  },
};

export default PlantsToWaterTodayCell;
