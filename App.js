import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Constants from 'expo-constants';

import Routes from './src/Routes';

const mainLayoutStyle = {
  flex: 1,
  marginTop: Constants.statusBarHeight,
}

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={mainLayoutStyle}>
          <Routes />
        </Layout>
      </ApplicationProvider>
    </>
  );
}
