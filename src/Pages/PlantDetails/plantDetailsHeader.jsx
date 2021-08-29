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

const fakeData = {
  name: 'Josefine',
  species: 'Orquidea',
  lastTimeWatered: '10/05/2021',
  nextTimeToWater: '30/05/2021',
  photoName: 'plant.jpeg',
  comments: [{
    message: 'As folhas estão ficando um pouco marrons',
    date: '23/05/2021',
  }, {
    message: 'Precisamos comprar mais adubo',
    date: '19/06/2021',
  }, {
    message: 'Comecei um experimento de regar com água de arroz',
    date: '25/08/2021',
  }],
};

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
          style={styles.plantAvatar}
        />
        <Layout>
          <Text category="c2" appearance="hint">Nome: {fakeData.name}</Text>
          <Text category="c2" appearance="hint">Espécie: {fakeData.species}</Text>
          <Text category="c2" appearance="hint">Última regada: {fakeData.lastTimeWatered}</Text>
          <Text category="c2" appearance="hint">Próxima regada: {fakeData.nextTimeToWater}</Text>
        </Layout>
      </Layout>
    </Layout>
  );
};

PlantDetailsHeader.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }),
};

PlantDetailsHeader.defaultProps = {
  navigation: {},
};

export default PlantDetailsHeader;
