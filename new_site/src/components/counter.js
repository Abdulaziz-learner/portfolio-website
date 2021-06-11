import React, { Component } from 'react';
import { Container,Row,Col } from 'reactstrap';

class Counter extends Component {
    constructor(){
        super();
        this.state={

            count:0
        }
    }

    increment=()=>{
this.setState({
    count:this.state.count + 1 
})

    }
    decrement=()=>{
this.setState({
    count:this.state.count - 1 
})

    }
    render() {
        return (<>
            <Container className=' bg-dark'>
                <Row >
                    <Col className='primary' md={{size:4,offset:4}}>
             <div className='a fs-50'>       
              <button onClick={()=>this.increment()}><h3 className='text-info'>+</h3></button>
                <span><h2 className='text-light'>{this.state.count}</h2></span>
                <button onClick={()=>this.decrement( )}><h3 className='text-danger'>-</h3></button>
            </div>
                    </Col>
                </Row>
            </Container>
          </> 
        );
    }
}

export default Counter;