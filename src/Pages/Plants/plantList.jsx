import React from 'react';
import {
  Text,
  Layout,
  List,
  ListItem,
  Avatar,
  Icon,
  useTheme,
  Button,
} from '@ui-kitten/components';
import PropTypes from 'prop-types';

import styles from './styles';

import fakePhotoProfile from '../../../assets/plant.jpeg';

const fakeData = new Array(20).fill({
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
});

const plantAvatar = () => (
  <Avatar
    source={fakePhotoProfile}
    size="medium"
    shape="round"
  />
);

const ItemDescription = ({ species, lastTimeWatered, nextTimeToWater }) => (
  <>
    { species && (
    <Text style={styles.plantListItemText} category="c2" appearance="hint">
      Espécia:
      {' '}
      {species}
    </Text>
    )}
    <Text style={styles.plantListItemText} category="c2" appearance="hint">
      Última regada:
      {' '}
      {lastTimeWatered}
    </Text>
    <Text style={styles.plantListItemText} category="c2" appearance="hint">
      Próxima regada:
      {' '}
      {nextTimeToWater}
    </Text>
  </>
);

ItemDescription.propTypes = {
  species: PropTypes.string,
  lastTimeWatered: PropTypes.string,
  nextTimeToWater: PropTypes.string,

};

ItemDescription.defaultProps = {
  species: 'Especie',
  lastTimeWatered: new Date(),
  nextTimeToWater: new Date(),
};

const ItemHeader = ({ title }) => (
  <Text style={styles.plantListItemText} category="c2">{title}</Text>
);

ItemHeader.propTypes = {
  title: PropTypes.string,
};

ItemHeader.defaultProps = {
  title: 'Titulo',
};

const PlantsToWaterTodayIcon = () => {
  const infiniteAnimationIconRef = React.useRef();
  const theme = useTheme();
  return <Icon animation="shake" ref={infiniteAnimationIconRef} animationConfig={{ cycles: Infinity }} fill={theme['color-info-500']} style={styles.cellIcon} name="droplet" />;
};

const moreDetailsIcon = () => {
  const theme = useTheme();
  return <Icon fill={theme['color-basic-1100']} style={styles.cellIcon} name="menu" />;
};

const renderPlantActions = ({ onMoreDetailsClick }) => (
  <Layout style={styles.plantButtonContainer}>
    <Button appearance="ghost" accessoryLeft={moreDetailsIcon} onPress={() => onMoreDetailsClick()} />
    <Button appearance="ghost" accessoryLeft={PlantsToWaterTodayIcon} onPress={() => console.log('Clicked plantsToWater Button')} />
  </Layout>
);

const renderPlant = ({ item, index, navigation }) => {
  const onMoreDetailsClick = () => {
    navigation.navigate('Details', {
      item,
    });
  };

  return (
    <ListItem
      key={index}
      title={() => <ItemHeader title={item.name} />}
      description={() => (
        <ItemDescription
          species={item.species}
          lastTimeWatered={item.lastTimeWatered}
          nextTimeToWater={item.nextTimeToWater}
        />
      )}
      accessoryLeft={plantAvatar}
      accessoryRight={() => renderPlantActions({ onMoreDetailsClick })}
    />
  );
};

const PlantList = ({ mainProps }) => (
  <Layout style={styles.plantListMainContainer}>
    <List
      data={fakeData}
      renderItem={(item) => renderPlant({ ...item, ...mainProps })}
    />
  </Layout>
);

PlantList.propTypes = {
  mainProps: PropTypes.shape({}),

};

PlantList.defaultProps = {
  mainProps: {},
};

export default PlantList;
