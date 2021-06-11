import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardText
} from 'reactstrap';
import {NavLink} from 'react-router-dom'
const NavRoute = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className=' n'>
      <Container>
        <Row>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">About us</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Col md='1'><NavItem>
              <NavLink className='mx-1'  activeStyle={{ color: 'red' }} to='/sport'>SPORT</NavLink>
            </NavItem></Col>
            <Col md='1'><NavItem>
              <NavLink className='mx-1'  activeStyle={{ color: 'red' }} to='/travelling'>AROUND WORLD</NavLink>
            </NavItem></Col>
            <Col md='1'><NavItem>
              <NavLink className='mx-1'  activeStyle={{ color: 'red' }} to='/newTodo'>TODO APP</NavLink>
            </NavItem></Col>
            <Col md='1'> <NavItem>
              <NavLink className='mx-1'  activeStyle={{ color: 'red' }} to='/nomerlar'>Numbers</NavLink>
            </NavItem></Col>
            
            <Col md='1'> <NavItem>
              <NavLink className='mx-1'  activeStyle={{ color: 'red' }} to='/users'>Users</NavLink>
            </NavItem></Col>
            <Col md='1'><NavItem>
              <NavLink className='mx-1'  activeStyle={{ color: 'red' }} to='/digitalclock'>Digital Clock</NavLink>
            </NavItem></Col>
            <Col md='1'> <NavItem>
              <NavLink className='mx-1'  activeStyle={{ color: 'red' }} to='/counter'>Counter</NavLink>
            </NavItem></Col>
<Col md='1'>
<NavItem>
              <NavLink className='mx-1'  activeStyle={{ color: 'red' }} to='/sapp'>Login Page</NavLink>
            </NavItem>
</Col>



           
            
           
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sahifalar
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    
   
        </Row>
      </Container>
      
    </div>
 
  
  
  );
}

export default NavRoute;