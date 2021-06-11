import React,{Component} from 'react';

import {Container,Row,
    Col,Card,CardImg,CardBody,CardTitle,CardText,Button,Alert,Table,Video} from 'reactstrap';
   import IMGHD from './media/s.webp';
   import IMGH from './media/basket.jpg'
export default class Sport extends Component{

    render(){
        return(
            <>
<Container className='bosh'>
    <Row>
        <Col>
        <ol className='ul'>
  <li ><a className='mb' href="https://www.skysports.com/football/news">FOOTBALL</a></li>
  <li><a className='mb' href="https://www.boxingnews24.com/">BOXING</a></li>
  <li><a className='mb' href="https://www.mmafighting.com/latest-news">MMA</a></li>
  <li><a className='mb' href="https://www.cbssports.com/nba/">BASKETBALL</a></li>
  <li ><a className='mb' href="default.asp">VOLLEYBALL</a></li>
  <li><a className='mb' href="news.asp">F-1</a></li>
  <li><a className='mb' href="contact.asp">SWIMMING</a></li>
  <li><a className='mb' href="about.asp">BASEBALL</a></li>
</ol>
<hr className='bg=ligth'/>
        </Col>
        <Col lg='12'>
<Card className='l'>
    <CardImg src={IMGHD} alt='l' />
    <CardBody className='bg-dark text-white'>
        <CardText>РЕАЛ МАДРИД ПРОИГРАЛ И УПУСТИЛ ШАНС ИГРАТ В ФИНАЛЕ</CardText>
    </CardBody>
</Card>

        </Col><Col lg='12'>
<Card className='l'>
    <CardImg src={IMGH} alt='k' />
    <CardBody className='bg-dark text-white'>
        <CardText>NBA Stars </CardText>
    </CardBody>
</Card>

        </Col>
  </Row>
</Container>


            </>
        )
    }
}