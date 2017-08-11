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
import MemberIntro from './MemberIntro.jsx'

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
        { visible ? <FixedMenu active='實驗室成員'/> : null }

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
            <UpperMenu active='實驗室成員'/>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <MemberIntro name='陳聖軒'  extra='口頭禪:ㄟ思穎' description='泰迪軒軒 專長是打JG， 不管是人還是遊戲都很坦, 實驗室最罩的學長之一' meta='join in 2015 實驗室首席JG' avatar='https://semantic-ui.com/images/avatar/large/chris.jpg'/>
              </Grid.Column>
              <Grid.Column>
                <MemberIntro name='耀中寶寶'  extra='口頭禪:+365' description='每天8點半都要補充一杯咖啡的耀中寶寶' meta='join in 2011?? 教授就是他拉' avatar='https://semantic-ui.com/images/avatar/large/elliot.jpg'/>
              </Grid.Column>
              <Grid.Column>
                <MemberIntro name='黃思穎'  extra='口頭禪:ㄟ聖軒' description='實驗室論文最早寫完的男人, 實驗室最罩的學長之一' meta='join in 2015 實驗室五路皆通' avatar='http://1.semantic-ui.com/images/avatar/large/matt.jpg'/>

              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                <MemberIntro name='楊尚恩'  extra='口頭禪:噗噗' description=' 叛逃到交大現在又準備要叛逃到國外的叛徒' meta='join in 2015 實驗室首席卷哥' avatar='http://bain.design/wp-content/uploads/2014/09/People-Avatar-Set-Rectangular-07.jpg' />
              </Grid.Column>
              <Grid.Column>
                <MemberIntro name='Benz'  extra='口頭禪:今尻魯撈（泰文）?' description='到歐洲爽玩了半年，現在正在與論文奮鬥的泰國人，卻沒洗過泰國浴0.0' meta='join in 2015 首席歐洲旅遊達人' avatar='https://semantic-ui.com/images/avatar2/large/mark.png' />
              </Grid.Column>
              <Grid.Column>
                <MemberIntro name='鄭銘毅'  extra='口頭禪:我不要' description='從煥哥實驗室叛逃到這裡的叛將，接電話時會發出很娘的聲音' meta='join in 2016 首席喇妹王' avatar='https://semantic-ui.com/images/avatar/large/jenny.jpg'/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                <MemberIntro name='溫景翔'  extra='口頭禪:ㄟ廷哥、嚴格講起來、某種程度上' description='叫翔哥的都有一種霸氣存在' meta='join in 2016 首席霸氣駕馭者' avatar='https://medland.clinic/ui/images/demo/people/patrick.png'/>
              </Grid.Column>
              <Grid.Column>
                <MemberIntro name='陳奕廷'  extra='口頭禪:ㄟ翔哥、南部.+ (正規表達式)' description='音樂風格偏好古風，原本立志要當醫生的的學長，桌球有點強?' meta='join in 2016 首席spark工程師' avatar='https://semantic-ui.com/images/avatar/large/daniel.jpg' />
              </Grid.Column>
              <Grid.Column>
                <MemberIntro name='游哲軒'  extra='口頭禪:抱歉、一個一個拖出來打' description='一個月花100買line貼圖，有著傲人腹圍的男人' meta='join in 2016 首席幹話王' avatar='http://1.semantic-ui.com/images/avatar/large/justen.jpg'/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                <MemberIntro name='劉凱婷'  extra='口頭禪:奇怪耶、好髒、好臭、有怪味道' description='會講法文的學姊，能吃的蔬菜很少，工作是維護實驗室空氣品質' meta='join in 2016 首席空汙檢測員' avatar='http://semantic-docs.xeophin.com/images/avatar/large/stevie.jpg'/>
              </Grid.Column>
              <Grid.Column>
                <MemberIntro name='張泰瑋'  extra='口頭禪:嗚嗚' description='什麼都會一點的全端工程師，有數年工具人經驗但是不會組電腦，魯到快當魔法師了' meta='join in 2016 首席接線生' avatar='http://www.semantic-ui.cn/images/avatar/large/christian.jpg'/>
              </Grid.Column>
              <Grid.Column>
                <MemberIntro name='黃翔宇' extra='口頭禪:騙拉' description='明明成績很好卻去當公務員， 每天晚上只吹1小時冷氣體驗公務員生活的黑人工程師' meta='join in 2016 專題最佳support ' avatar='http://bain.design/wp-content/uploads/2014/09/People-Avatar-Set-Rectangular-16.jpg'/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                <MemberIntro name='吳昭儀'  extra='口頭禪:嘎' description='每次meeting前都一定會生出精美簡報，整年下來精通prezi的簡報工程師，目前正在補習班水深火熱' meta='join in 2016 首席簡報工程師' avatar='https://semantic-ui.com/images/avatar/large/ade.jpg'/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<HomepageLayout />, document.getElementById('app'))
