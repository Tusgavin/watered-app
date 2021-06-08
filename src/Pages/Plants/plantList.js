import React, { useRef } from 'react';
import {
  Text,
  Layout,
  List,
  ListItem,
  Avatar,
  Icon,
  useTheme,
  Button
} from '@ui-kitten/components';
import Constants from 'expo-constants';

import styles from './styles';

const fakeData = new Array(20).fill({
  name: 'Josefine',
  species: 'Orquidea',
  lastTimeWatered: '10/05/2021',
  nextTimeToWater: '30/05/2021',
  photoName: 'plant.jpeg'
});

import fakePhotoProfile from '../../../assets/plant.jpeg';

const plantAvatar = () => (
  <Avatar
  source={fakePhotoProfile}
  size='medium'
  shape='round'/>
);

const ItemDescription = ({ species, lastTimeWatered, nextTimeToWater }) => (
  <>
    { species && <Text style={styles.plantListItemText} category='c2' appearance='hint'>Espécia: {species}</Text>}
    <Text style={styles.plantListItemText} category='c2' appearance='hint'>Última regada: {lastTimeWatered}</Text>
    <Text style={styles.plantListItemText} category='c2' appearance='hint'>Próxima regada: {nextTimeToWater}</Text>
  </>
);

const ItemHeader = ({ title }) => (
  <Text style={styles.plantListItemText} category='c2'>{title}</Text>
);

const PlantsToWaterTodayIcon = (props) => {
  const infiniteAnimationIconRef = React.useRef();
  const theme = useTheme();
  return <Icon animation='shake' ref={infiniteAnimationIconRef} animationConfig={{ cycles: Infinity }} {...props} fill={theme['color-info-500']} style={styles.cellIcon} name='droplet' />
};

const moreDetailsIcon = (props) => {
  const theme = useTheme();
  return <Icon {...props} fill={theme['color-basic-1100']} style={styles.cellIcon} name='menu' />
};

const renderPlantActions = () => {
  return (
    <Layout style={styles.plantButtonContainer}>
      <Button appearance='ghost' accessoryLeft={moreDetailsIcon} onPress={() => onMoreDetailsClick()} />
      <Button appearance='ghost' accessoryLeft={PlantsToWaterTodayIcon} onPress={() => console.log('Clicked plantsToWater Button')} />
    </Layout> 
  );
};

const renderPlant = ({ item, index }) => {

  return (
    <ListItem 
    key={index}
    title={() => <ItemHeader title={item.name} />}
    description={() => <ItemDescription species={item.species} lastTimeWatered={item.lastTimeWatered} nextTimeToWater={item.nextTimeToWater} />}
    accessoryLeft={plantAvatar}
    accessoryRight={renderPlantActions}
    />
  );
};

const PlantList = ({ navigation }) => {
  return (
    <Layout style={styles.plantListMainContainer}>
      <List
      data={fakeData}
      renderItem={renderPlant}
      >
      </List>
    </Layout>
  );
}

export default PlantList;