import React from 'react'
import { connect } from 'redux-bundler-react'
import { StyleSheet, View } from 'react-native'
import {
  Container,
  Content,
  Text,
  Header,
  Body,
  Title,
  Left,
  Button,
  Icon,
  List,
  ListItem
} from 'native-base'

const Menu = ({ doUpdateUrl }) => (
  <Container style={styles.container}>
    <Header>
      <Left>
        <Button transparent onPress={() => doUpdateUrl('/')}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title style={styles.roboto}>MENU</Title>
      </Body>
    </Header>
    <Content>
      <List>
        <ListItem onPress={() => doUpdateUrl('/categories')}>
          <Text>Categories</Text>
        </ListItem>
        <ListItem onPress={() => doUpdateUrl('/resources')}>
          <Text>Resources</Text>
        </ListItem>
      </List>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    flexDirection: 'row',
    height: '100vh'
  },
  roboto: {
    fontFamily: 'roboto',
    color: 'gold'
  }
})

export default connect('doUpdateUrl', Menu)
