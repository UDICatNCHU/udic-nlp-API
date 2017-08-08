var React = require('react')
import {
  Button,
  Container,
  Menu,
} from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <a className='item active' href='/' key='1'>首頁</a>
      <a className='item' href='/api' key='2'>API</a>
      <a className='item' href='/api' key='3'>延伸服務</a>
      <a className='item' href='/api' key='4'>實驗室成員</a>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a'>Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default FixedMenu;