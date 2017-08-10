import React, { Component } from 'react'
var ReactDOM = require('react-dom')

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import Footer from './footer.jsx'
import FixedMenu from './FixedMenu.jsx'
import ApiDemoModal from './ApiDemoModal.jsx'

export default class HomepageLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.hideFixedMenu = this.hideFixedMenu.bind(this)
    this.showFixedMenu = this.showFixedMenu.bind(this)
  }

  hideFixedMenu() {
    this.setState({ visible: false })
  }

  showFixedMenu() {
    this.setState({ visible: true })
  }

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <a className='item active' href='/' key='1'>首頁</a>
                <a className='item' href='/api' key='2'>API</a>
                <Menu.Item as='a'>延伸服務</Menu.Item>
                <Menu.Item as='a'>實驗室成員 </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>Log in</Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <ApiDemoModal name='KCM' intro='我們實驗室主要於資料庫查詢處理與資料探勘技術領域進行研究；各種不同資訊平台及其應用所產生的資料，帶著不同的資料屬性與不同的環境應用需求，也產生多樣化的研究議題，持續地推進資料工程(Data Engineering)研究領域向前發展。而這樣的發展也伴隨資訊技術的更貼近日常生活而有著持續加快的趨勢。' picture='https://image.flaticon.com/icons/svg/204/204358.svg' descript='xxxxxxxxxxxx' url='http://140.120.13.244:10000/kcm/?lang=cht&keyword='/>
            <ApiDemoModal name='PMI oriented KCM' intro='我們實驗室主要於資料庫查詢處理與資料探勘技術領域進行研究；各種不同資訊平台及其應用所產生的資料，帶著不同的資料屬性與不同的環境應用需求，也產生多樣化的研究議題，持續地推進資料工程(Data Engineering)研究領域向前發展。而這樣的發展也伴隨資訊技術的更貼近日常生活而有著持續加快的趨勢。' picture='https://image.flaticon.com/icons/svg/429/429293.svg' descript='xxxxxxxxxxxx' url='http://140.120.13.244:10000/pmi/?lang=cht&keyword='/>
            <ApiDemoModal name='KEM' intro='我們實驗室主要於資料庫查詢處理與資料探勘技術領域進行研究；各種不同資訊平台及其應用所產生的資料，帶著不同的資料屬性與不同的環境應用需求，也產生多樣化的研究議題，持續地推進資料工程(Data Engineering)研究領域向前發展。而這樣的發展也伴隨資訊技術的更貼近日常生活而有著持續加快的趨勢。' picture='https://www.flaticon.com/premium-icon/icons/png/512/284/284842.png' descript='xxxxxxxxxxxx' url='http://140.120.13.244:10000/kem/?lang=cht&keyword='/>
            <ApiDemoModal name='KCEM' intro='我們實驗室主要於資料庫查詢處理與資料探勘技術領域進行研究；各種不同資訊平台及其應用所產生的資料，帶著不同的資料屬性與不同的環境應用需求，也產生多樣化的研究議題，持續地推進資料工程(Data Engineering)研究領域向前發展。而這樣的發展也伴隨資訊技術的更貼近日常生活而有著持續加快的趨勢。' picture='https://www.flaticon.com/premium-icon/icons/png/512/284/284859.png' descript='xxxxxxxxxxxx' url='http://140.120.13.244:10000/kcem/?lang=cht&num=10&kcm=20&kem=50&keyword='/>

          </Container>
        </Segment>

        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<HomepageLayout />, document.getElementById('app'))
