import React from 'react';
import { Layout, Avatar, Text, useTheme } from '@ui-kitten/components';

import styles from './styles';

import fakePhotoProfile from '../../../assets/perfil.jpg';

const fakeUsername = '_Tusgavin_';

const Banner = () => {

  return (
     <Layout style={styles.bannerMainContainer}>
        <Avatar
         source={fakePhotoProfile}
         size='giant'
         shape='round'
         style={styles.plantAvatar}/>
         <Text category='h4'>{fakeUsername}</Text>
     </Layout>
  );
}

export default Banner;