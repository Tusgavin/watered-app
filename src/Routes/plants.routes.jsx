import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PlantDetails from '../Pages/PlantDetails';
import Plants from '../Pages/Plants';

const PlantDetailsStack = createStackNavigator();
const { Navigator, Screen } = PlantDetailsStack;

const PlantDetailsRoutes = () => {
  return (
   <Navigator mode='modal' >
      <Screen
      name='ListPlants'
      component={Plants}
      options={{ headerShown: false }}
      />
      <Screen
      name='Details'
      component={PlantDetails}
      options={{ headerShown: false }}
      />
   </Navigator>
  );
}

export default PlantDetailsRoutes;