import React from 'react';
import { Text, Layout } from '@ui-kitten/components';

import Banner from './banner';
import Details from './details';
import Activity from './activity'

const Home = () => {
   return (
      <Layout style={{ flex: 1 }}>
         <Banner />
         <Details />
         <Activity />
      </Layout>
   )
};

export default Home;