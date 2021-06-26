import React from 'react';
import {
  Layout,
  Button,
  useTheme,
  Icon,
  Text,
  Avatar,
} from '@ui-kitten/components';
import PropTypes from 'prop-types';

import styles from './styles';

import fakePlantPhoto from '../../../assets/plant.jpeg';

const goBackIcon = () => {
  const theme = useTheme();
  return <Icon fill={theme['color-primary-700']} style={styles.goBackIcon} name="arrowhead-down" />;
};

const PlantDetailsHeader = ({ navigation }) => {
  const onGoBackClick = () => {
    navigation.goBack();
  };

  return (
    <Layout style={styles.plantDeatilsHeaderContainer}>
      <Button
        accessoryLeft={goBackIcon}
        appearance="ghost"
        onPress={() => onGoBackClick()}
      />
      <Layout style={styles.plantDeatilsHeaderInfoContainer}>
        <Avatar
          source={fakePlantPhoto}
          size="giant"
          shape="round"
        />
        <Layout>
          <Text category="c2" appearance="hint">Nome: </Text>
          <Text category="c2" appearance="hint">Espécie: </Text>
          <Text category="c2" appearance="hint">Última regada: </Text>
          <Text category="c2" appearance="hint">Próxima regada: </Text>
        </Layout>
      </Layout>
    </Layout>
  );
};

PlantDetailsHeader.propTypes = {
  navigation: PropTypes.func,

};

PlantDetailsHeader.defaultProps = {
  navigation: () => '',
};

export default PlantDetailsHeader;
