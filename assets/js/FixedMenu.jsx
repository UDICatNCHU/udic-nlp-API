var React = require('react')
import {
  Button,
  Container,
  Menu,
} from 'semantic-ui-react'

const FixedMenu = (props) => {
  let activeTable = {
    '首頁':'item',
    'API':'item',
    '延伸服務':'item',
    '實驗室成員':'item'
  }
  activeTable[props.active] = 'item active'
  return(
  <Menu fixed='top' size='large'>
    <Container>
      <a className={activeTable['首頁']} href='/' >首頁</a>
      <a className={activeTable['API']} href='/api' >API</a>
      <a className={activeTable['延伸服務']} href='' >延伸服務</a>
      <a className={activeTable['實驗室成員']} href='/member' >實驗室成員</a>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a'>Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>)
}

export default FixedMenu;