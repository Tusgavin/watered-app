import React from 'react';
import { View } from 'react-native';
import {
   Layout,
   Button,
   useTheme,
   Icon
} from '@ui-kitten/components';

 import styles from './styles';

const deletePlantIcon = () => {
  const theme = useTheme();
  return <Icon fill={theme['color-primary-100']} style={styles.cellIcon} name="trash-outline" />;
};

const waterPlantIcon = () => {
  const theme = useTheme();
  return <Icon fill={theme['color-primary-100']} style={styles.cellIcon} name="droplet-outline" />;
};

// const addCommentIcon = () => {
//   const theme = useTheme();
//   return <Icon fill={theme['color-primary-100']} style={styles.cellIcon} name="message-circle-outline" />;
// };

const PlantDetailsActions = () => {
  return (
   <Layout style={styles.plantDetailsActionContainer}>
     {/* <View>
      <Button status='success' accessoryLeft={addCommentIcon} style={styles.actionButton} />
     </View> */}
     <View>
      <Button status='primary' accessoryLeft={waterPlantIcon} style={styles.actionButton} />
      </View>
     <View>
      <Button status='danger' accessoryLeft={deletePlantIcon} style={styles.actionButton} />
     </View>
   </Layout>
  );
}

export default PlantDetailsActions;