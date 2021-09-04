import React from 'react';
import {
   Layout,
   Button,
   Icon,
   useTheme
} from '@ui-kitten/components';

import styles from './styles';

const addPlantIcon = () => {
   const theme = useTheme();
   return <Icon fill={theme['color-primary-100']} style={styles.cellIcon} name="plus-outline" />;
 };

const AddPlant = () => (
  <Layout style={styles.addPlantContainer}>
     <Button accessoryLeft={addPlantIcon} status="success">
        Adicionar Planta
     </Button>
  </Layout>
);

export default AddPlant;
