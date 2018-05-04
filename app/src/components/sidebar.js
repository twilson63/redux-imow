import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Container, Content, List, ListItem } from 'native-base'

const SideBar = () => (
  <Container>
    <Content>
      <Image source={{ uri: 'https://placehold.it/300/300' }} />
      <List>
        <ListItem>
          <Text>Foo</Text>
        </ListItem>
      </List>
    </Content>
  </Container>
)

export default SideBar

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'gray'
//   }
// })
