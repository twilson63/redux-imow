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

const li = resource => (
  <ListItem key={resource._id}>
    <Text>{resource.name}</Text>
  </ListItem>
)

const Resources = ({ resources, doUpdateUrl }) => (
  <Container>
    <Header>
      <Left>
        <Button transparent onPress={() => doUpdateUrl('/menu')}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Resources</Title>
      </Body>
    </Header>
    <Content>
      <List>{resources && map(li, resources)}</List>
    </Content>
  </Container>
)

export default connect('selectResources', 'doUpdateUrl', Resources)
