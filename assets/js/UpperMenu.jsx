var React = require('react')
import {
  Button,
  Container,
  Menu,
} from 'semantic-ui-react'

const UpperMenu = (props) => {
  let activeTable = {
    '首頁':'item',
    'API':'item',
    '延伸服務':'item',
    '實驗室成員':'item'
  }
  activeTable[props.active] = 'item active'
  return(
    <Container>
      <Menu inverted pointing secondary size='large'>
        <a className={activeTable['首頁']} href='/' >首頁</a>
        <a className={activeTable['API']} href='/api' >API</a>
        <a className={activeTable['延伸服務']} href='' >延伸服務</a>
        <a className={activeTable['實驗室成員']} href='/member' >實驗室成員</a>
        <Menu.Item position='right'>
          <Button as='a' inverted>Log in</Button>
          <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
        </Menu.Item>
      </Menu>
    </Container>
  )
}

export default UpperMenu;