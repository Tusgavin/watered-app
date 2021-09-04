# putiputi-app

### Disclaimer - Esse projeto ainda não está finalizado

## Introdução

Neste repositório se encontra o código em React Native do aplicativo PutiPuti, criado com intuito de monitorar o bem estar de suas plantas.

O intuito para criação foi monitorar minhas próprias plantas e utilizar a lib UI Kitten para React Native para desenvolver um aplicativo.

Foi utilizado o Expo durante o desenvolvimento

## Telas

### Tela Menu Inicial

A tela de menu inicial apresenta no topo o avatar do usuário seguido de seu nome.

Após isso, vem detalhes do usuário.

Por fim, as últimas atividades que o usuário realizou utilizando o sistema.

![alt text](/githubAssets/Tela_menu_inicial.png "Menu Inicial")

### Tela Listagem de Plantas

No topo apresenta um Dashbooard que mostra a quantidade de plantas cadastradas, a quantidades de plantas que precisam ser aguadas nesse dia e a quantidade de plantas que estão atrasadas para serem aguadas.

Seguido isso, apresenta a lista de plantas cadastradas com botão para acessar mais informações sobre ela e com botão para aguá-la.

Ao fnal, apresenta o botão de cadastrar uma nova planta.

![alt text](/githubAssets/Tela_Listagem_de_Plantas.png "Listagem de Plantas")

### Tela Mais Detalhes da Planta

Assim como de usuário, no topo apresenta o avatar da planta, seguido de informações importantes sobre ela.

Após isso, uma lista de comentários sobre essa planta.

Na parte inferior, um hub de ações com botões para Adicionar Comentário, Editar informações, Aguar e Remover Planta, respectivamente.

![alt text](/githubAssets/Tela_Mais_Detalhes_da_Planta.png "Detalhes da Planta")

## Backend
 o Backend foi (está sendo) desenvolvido com NodeJS e com o ORM Sequelize. A implementação se encontra no repositório https://github.com/Tusgavin/putiputi-webserver
