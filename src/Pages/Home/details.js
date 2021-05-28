import React from 'react';
import { Layout, ListItem, Icon } from '@ui-kitten/components';

import styles from './styles';

const Details = () => {
   const renderDateJoinedIcon = (props) => (
      <Icon {...props} name='award-outline' />
   );

   const renderAmountOfPlantsIcon = (props) => (
      <Icon {...props} name='book-open-outline' />
   );

   const renderEmailIcon = (props) => (
      <Icon {...props} name='email-outline' />
   );

   const userData = [{
      title: 'Email',
      value: 'teste@teste.com',
      icon: renderEmailIcon
   }, {
      title: 'Data de Inscrição',
      value: '22/01/2020 11:32',
      icon: renderDateJoinedIcon
   }, {
      title: 'Quantidade de Plantas',
      value: '5',
      icon: renderAmountOfPlantsIcon
   }];

  return (
     <Layout style={styles.detailsMainContainer}>
         { userData && userData.map((item, index) => (
            <ListItem
            title={item.title}
            description={item.value}
            accessoryLeft={item.icon}
            />
         ))}
     </Layout>
  );
}

export default Details;