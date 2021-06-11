import React,{Component} from 'react';
import { Input, Button,Container,Row,Col,Card,CardBody,CardImg,Nav, NavItem, NavLink, CardText } from 'reactstrap';
import IMGS from './media/m/shut.jpg';
import IMGW from './media/m/SH.jpg';
import IMGA from './media/Mecca.jpeg';
  export default class Travelling extends Component{

    Show=()=>{
const place=document.querySelector('#alfa').value,
joy={
place
};
document.querySelector("#alfa").value='';
    }
render(){
    return(

        <>
        <Container>
            <Row>
                <Col className='bg-dark text-white' lg='12'>
<h4> <a href='#'><i className='px-5'>View</i></a> <a href='#'><b  className='px-5'>Booking</b></a> <a href='#'><i  className='px-5'>Information</i></a>  <a href="#"><b  className='px-5'>Famous Places</b></a> <a href='#'><i  className='px-5'>About us</i></a> </h4>


                
                </Col>
            </Row>
        </Container>
        <Container className='bg-secondary py-2'>
            <Row>
               <Input className='bg-light text-dark' type='text' placeholder='Search place...' id='alfa'/>
               <Button className='btn btn-warning' onClick={()=>this.Show()}>Add Places</Button>
                <Col  className='py-2'  lg='3'>
                <Card className='v bg-dark text-white'>
                    <CardImg className='say' src={IMGS} alt='o' />
                    <CardBody>
                        <CardText>
Destination Switzerland, a Nations Online country profile of the Swiss Confederation.Switzerland is a landlocked mountainous country in South-Central Europe, bordered by Austria,Germany,Lihtey
</CardText>
                        <Button className='btn btn-danger w-100%'><a href='https://www.nationsonline.org/oneworld/switzerland.htm'><h3>View</h3></a></Button>
                    </CardBody>
                </Card>
                </Col>

                 <Col  className='py-2'  lg='3'>
                <Card className='v bg-dark text-white'>
                    <CardImg className='say' src={IMGW} alt='o' />
                    <CardBody>
                        <CardText>
                        Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres 
</CardText>
                        <Button className='btn btn-danger w-100%'><a href='https://www.nationsonline.org/oneworld/switzerland.htm'><h3>View</h3></a></Button>
                    </CardBody>
                </Card>
                </Col>
                <Col  className='py-2'  lg='3'>
                <Card className='v bg-dark text-white'>
                    <CardImg className='say' src={IMGA} alt='o' />
                    <CardBody>
                        <CardText>
                        Mecca, officially Makkah al-Mukarramah (Arabic: مكة المكرمة‎, romanized: Makkat al-Mukarramah, lit. 'Makkah the Noble') and commonly shortened to Makkah,[a] is the holiest city in Islam 
</CardText>
                        <Button className='btn btn-danger w-100%'><a href='https://www.nationsonline.org/oneworld/switzerland.htm'><h3>View</h3></a></Button>
                    </CardBody>
                </Card>
                </Col>
                

            </Row>
        </Container>
        </>
    )
}

    
  }


