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
  Icon
} from 'native-base'

const Home = ({ doUpdateUrl }) => (
  <Container style={styles.container}>
    <Header>
      <Left>
        <Button transparent onPress={() => doUpdateUrl('/menu')}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title style={styles.roboto}>VETERAN SUPPORT</Title>
      </Body>
    </Header>
    <Content>
      <View style={styles.center}>
        <Text>I am a home page</Text>
      </View>
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

export default connect('doUpdateUrl', Home)
