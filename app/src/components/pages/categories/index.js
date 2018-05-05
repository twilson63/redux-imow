import React from 'react'
import { connect } from 'redux-bundler-react'
import { map } from 'ramda'

import {
  Container,
  Header,
  Body,
  Title,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Button,
  Icon
} from 'native-base'

const li = category => (
  <ListItem key={category._id}>
    <Text>{category.name}</Text>
  </ListItem>
)

const Categories = ({ doUpdateUrl, categories }) => (
  <Container>
    <Header>
      <Left>
        <Button transparent onPress={() => doUpdateUrl('/menu')}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Categories</Title>
      </Body>
    </Header>
    <Content>
      <List>{categories && map(li, categories)}</List>
    </Content>
  </Container>
)

export default connect('selectCategories', 'doUpdateUrl', Categories)
