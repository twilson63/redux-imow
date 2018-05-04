import React from 'react'
import { render } from 'react-native'
import { Container, Content, Text } from 'native-base'
//import 'typeface-roboto'

//import Root from './components/root'
const App = () => (
  <Container>
    <Content>
      <Text>Welcome To Native Base</Text>
    </Content>
  </Container>
)

render(<App />, document.getElementById('root'))
