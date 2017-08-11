import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const MemberIntro = (props) => {
  if (props.show=='False'){
    return null
  }
  else{
    return(
    <Card>
      <Image src={props.avatar} />
      <Card.Content>
        <Card.Header>
          {props.name}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            {props.meta}
          </span>
        </Card.Meta>
        <Card.Description>
          {props.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {props.extra}
        </a>
      </Card.Content>
    </Card>
    )
  }
}

export default MemberIntro
