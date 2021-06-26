import React from 'react';
import { Layout } from '@ui-kitten/components';

import AmountOfPlantsCell from './DashboardCells/amountOfPlantsCell';
import PlantsToWaterTodayCell from './DashboardCells/plantsToWaterTodayCell';
import OverduePlantsToWaterCell from './DashboardCells/overduePlantsToWaterCell';

import styles from './styles';

const fakeData = [{
  title: 'Quantidade de Plantas',
  value: '12',
  type: 'success',
}, {
  title: 'Plantas Para Serem Aguadas Hoje',
  value: '2',
  type: 'primary',
}, {
  title: 'Plantas Atrasadas',
  value: '1',
  type: 'danger',
}];

const PlantDashboard = () => (
  <Layout style={styles.plantDashboardMainContainer}>
    <AmountOfPlantsCell data={fakeData[0]} />
    <PlantsToWaterTodayCell data={fakeData[1]} />
    <OverduePlantsToWaterCell data={fakeData[2]} />
  </Layout>
);

export default PlantDashboard;
