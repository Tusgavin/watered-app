import React from 'react';
import {
  Layout, Text, useTheme, Icon,
} from '@ui-kitten/components';
import PropTypes from 'prop-types';

import styles from './styles';

const OverduePlantsToWaterIcon = () => {
  const theme = useTheme();
  return <Icon fill={theme['color-danger-500']} style={styles.cellIcon} name="alert-triangle" />;
};

const OverduePlantsToWaterCell = ({ data }) => {
  const theme = useTheme();

  return (
    <Layout style={[styles.cellContainer, { borderBottomColor: theme['color-danger-500'] }]}>
      <OverduePlantsToWaterIcon />
      <Text category="h1" style={{ color: theme['color-danger-700'], marginLeft: '8%' }}>{data.value}</Text>
    </Layout>
  );
};

OverduePlantsToWaterCell.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.string,
  }),
};

OverduePlantsToWaterCell.defaultProps = {
  data: {
    value: 'Valor',
  },
};

export default OverduePlantsToWaterCell;
