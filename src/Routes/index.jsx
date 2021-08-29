import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import PropTypes from 'prop-types';

import Home from '../Pages/Home';

import PlantDetailsRoutes from './plants.routes';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => (
  <Icon {...props} name="home-outline" />
);

const PlantsIcon = (props) => (
  <Icon {...props} name="heart-outline" />
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Home" icon={HomeIcon} />
    <BottomNavigationTab title="Plantas" icon={PlantsIcon} />
  </BottomNavigation>
);

BottomTabBar.propTypes = {
   navigation: PropTypes.shape({
      navigate: PropTypes.func
   }),
   state: PropTypes.shape({
      index: PropTypes.number,
      routeNames: PropTypes.array
   }),
};

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Home" component={Home} />
    <Screen name="Plants" component={PlantDetailsRoutes} />
  </Navigator>
);

const Routes = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

export default Routes;
