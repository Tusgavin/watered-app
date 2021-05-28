import React from 'react';
import { Layout, ListItem, Icon } from '@ui-kitten/components';

import styles from './styles';

const renderDateJoinedIcon = (props) => (
   <Icon {...props} name='award-outline' />
);

const renderAmountOfPlantsIcon = (props) => (
   <Icon {...props} name='book-open-outline' />
);

const renderEmailIcon = (props) => (
   <Icon {...props} name='email-outline' />
);

const renderChangeEmailIcon = (props) => {
   return <Icon {...props} name='settings-2-outline' />
};

const userData = [{
   title: 'Email',
   value: 'teste@teste.com',
   icon: renderEmailIcon,
   moreToolsIcon: renderChangeEmailIcon
}, {
   title: 'Data de Inscrição',
   value: '22/01/2020 11:32',
   icon: renderDateJoinedIcon,
   moreToolsIcon: ''
}, {
   title: 'Quantidade de Plantas',
   value: '5',
   icon: renderAmountOfPlantsIcon,
   moreToolsIcon: ''
}];

const Details = () => {
  return (
     <Layout style={[styles.detailsMainContainer]}>
         { userData && userData.map((item, index) => (
            <ListItem
            key={index}
            title={item.title}
            description={item.value}
            accessoryLeft={item.icon}
            accessoryRight={item.moreToolsIcon}
            />
         ))}
     </Layout>
  );
}

export default Details;