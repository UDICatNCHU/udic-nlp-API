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
import UpperMenu from './UpperMenu.jsx'
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
        { visible ? <FixedMenu active='API' /> : null }

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
            <UpperMenu active='API'/>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <ApiDemoModal name='KCM' intro='頻繁共現關聯 (Co-occurrence Relationship)：例如，輸入蔡英文，將會回傳一系列與蔡英文頻繁一起出現之字詞，如總統、台灣、民主進步黨等。' picture='https://image.flaticon.com/icons/svg/204/204358.svg' descript='

`/kcm/?keyword=<>&lang=<>&num=<>
此API提供：取得輸入字詞之頻繁共現詞 (Co-Occurrence Relationship)
範例(Example)：140.120.13.244:10000/kcm/?keyword=中興大學&lang=cht' url='http://140.120.13.244:10000/kcm/?lang=cht&keyword=`'/>
            <ApiDemoModal name='PMI oriented KCM' intro='我們實驗室主要於資料庫查詢處理與資料探勘技術領域進行研究；各種不同資訊平台及其應用所產生的資料，帶著不同的資料屬性與不同的環境應用需求，也產生多樣化的研究議題，持續地推進資料工程(Data Engineering)研究領域向前發展。而這樣的發展也伴隨資訊技術的更貼近日常生活而有著持續加快的趨勢。' picture='https://image.flaticon.com/icons/svg/429/429293.svg' descript='xxxxxxxxxxxx' url='http://140.120.13.244:10000/pmi/?lang=cht&keyword='/>
            <ApiDemoModal name='KEM' intro='上下文情境相似關聯 (Similar Context Sharing Relationship)：例如，輸入周杰倫，將會回傳一系列相似詞，如蔡依林、王力宏、張惠妹等。' picture='https://www.flaticon.com/premium-icon/icons/png/512/284/284842.png' descript='xxxxxxxxxxxx' url='http://140.120.13.244:10000/kem/?lang=cht&keyword='/>
            <ApiDemoModal name='KCEM' intro='我們實驗室主要於資料庫查詢處理與資料探勘技術領域進行研究；各種不同資訊平台及其應用所產生的資料，帶著不同的資料屬性與不同的環境應用需求，也產生多樣化的研究議題，持續地推進資料工程(Data Engineering)研究領域向前發展。而這樣的發展也伴隨資訊技術的更貼近日常生活而有著持續加快的趨勢。' picture='https://www.flaticon.com/premium-icon/icons/png/512/284/284859.png' descript='xxxxxxxxxxxx' url='http://140.120.13.244:10000/kcem/?lang=cht&num=10&kcm=20&kem=50&keyword='/>

          </Container>
        </Segment>

        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<HomepageLayout />, document.getElementById('app'))
