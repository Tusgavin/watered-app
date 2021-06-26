import React from 'react';
import {
  Layout, Text, useTheme, Icon,
} from '@ui-kitten/components';
import PropTypes from 'prop-types';

import styles from './styles';

const AmountOfPlantsIcon = () => {
  const theme = useTheme();
  return <Icon fill={theme['color-success-500']} style={styles.cellIcon} name="book-open" />;
};

const AmountOfPlantsCell = ({ data }) => {
  const theme = useTheme();

  return (
    <Layout style={[styles.cellContainer, { borderBottomColor: theme['color-success-500'] }]}>
      <AmountOfPlantsIcon />
      <Text category="h1" style={{ color: theme['color-success-700'], marginLeft: '8%' }}>{data.value}</Text>
    </Layout>
  );
};

AmountOfPlantsCell.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.string,
  }),
};

AmountOfPlantsCell.defaultProps = {
  data: {
    value: 'Valor',
  },
};

export default AmountOfPlantsCell;
