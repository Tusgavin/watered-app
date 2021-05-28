import React from 'react';
import { View } from 'react-native';
import { Layout, Avatar, Text } from '@ui-kitten/components';

import styles from './styles';

import fakePhotoProfile from '../../../assets/perfil.jpg';

const fakeUsername = '_Tusgavin_';

const Banner = () => {
  return (
     <Layout style={styles.bannerMainContainer}>
        <Avatar
         source={fakePhotoProfile}
         size='giant'
         shape='round'/>
        <Text category='h4'>{fakeUsername}</Text>
     </Layout>
  );
}

export default Banner;