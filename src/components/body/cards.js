import React from 'react';
import { Card, CardImg, CardGroup,} from 'reactstrap';
import image6 from './../../assets/corousel3/image6.jpg'
import image7 from './../../assets/corousel3/image7.jpg'
import image8 from './../../assets/corousel3/image8.jpg'
import image9 from './../../assets/corousel3/image9.jpg'
import image10 from './../../assets/corousel3/image10.jpg'
import image11 from './../../assets/corousel3/image11.jpg'
import './body.css'
const arrImage = [image6,image7,image8,image9,image10, image11]
const BodyComponent = (props) => {
  return (
    <CardGroup className='CardGroupTop'>
        <Card>
          <CardImg className='CardGroup' top width="100%" src={arrImage[Math.floor(Math.random() * arrImage.length)]} alt="Card image cap" />
        </Card>
      <Card>
        <CardImg className='CardGroup' top width="100%" src={arrImage[Math.floor(Math.random() * arrImage.length)]} alt="Card image cap" />
      </Card>
      <Card>
        <CardImg className='CardGroup' top width="100%" src={arrImage[Math.floor(Math.random() * arrImage.length)]} alt="Card image cap" />
      </Card>
      <Card>
        <CardImg className='CardGroup' top width="100%" src={arrImage[Math.floor(Math.random() * arrImage.length)]} alt="Card image cap" />
      </Card>
    </CardGroup>
  );
};

export default BodyComponent;