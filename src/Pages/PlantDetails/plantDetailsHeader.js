import React from 'react';
import {
   Layout,
   Button,
   useTheme,
   Icon,
   Text
 } from '@ui-kitten/components';

 import styles from './styles';

const goBackIcon = (props) => {
   const theme = useTheme();
   return <Icon {...props} fill={theme['color-primary-700']} style={styles.goBackIcon} name='arrowhead-down' />
};

const PlantDetailsHeader = ({ navigation }) => {
   const onGoBackClick = () => {
      navigation.goBack();
   };

   return (
      <Layout style={styles.plantDeatilsHeaderContainer}>
         <Button
         accessoryLeft={goBackIcon}
         appearance='ghost'
         onPress={() => onGoBackClick()}/>
         <Layout style={styles.plantDeatilsHeaderInfoContainer}>
            <Text> Testee</Text>
         </Layout>
      </Layout>
   );
}

export default PlantDetailsHeader;