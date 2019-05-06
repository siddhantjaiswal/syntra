import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  InputGroup,
  InputGroupAddon,
  Button,
  Col,
  DropdownItem } from 'reactstrap';

  import { AwesomeButton } from "react-awesome-button";
  import "react-awesome-button/dist/styles.css";
  

import SelectedComponent from './selectedButton/selectedButtonComponent'
import Suggestion from './suggestionCompoent';
import DummyComponent  from './DummyComponent'
import './header.css'
const ref = React.createRef();
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  navigateToSignup() {
    console.log('history:',this.props.props.history.push('/signup'));
  }
  navigateToLogin() {
    console.log('history:',this.props.props.history.push('/login'));
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img className='logoApk' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Esko_Praha_logo.svg/2000px-Esko_Praha_logo.svg.png" />yntra</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <SelectedComponent />
            <DummyComponent.RefEx ref={ref} someProp='random'/>
            <InputGroup className='SearchBar'>
              <InputGroupAddon addonType="prepend"> 
              <Button id='searchIcon' color="primary">
                <i id='elementID' className="fa fa-search" aria-hidden="true" />
              </Button>
              </InputGroupAddon>
              <Suggestion props={this.props.props} />
              {/* <Input placeholder="Search for product,brands and more.." /> */}
            </InputGroup>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                      <i className="fa fa-user" aria-hidden="true"></i>
                      Profile
                  </DropdownToggle>
                  <DropdownMenu right>
                    {/* <DropdownItem> */}
                      <span className='WelcomeText'>Welcome</span>
                      <div className='manageOrders'>
                        To access and manage orders
                      </div>
                      <div className='rowData'>
                        <Col className='column' xs="6">
                          <AwesomeButton  onPress={() => this.navigateToSignup()}  type="primary">SignUp</AwesomeButton>
                          {/* <Button onClick={() => this.navigateToSignup()} color="primary">SignUp</Button> */}
                        </Col>
                        <Col className='column' xs="6">
                          <AwesomeButton  onPress={() => this.navigateToLogin()}  type="primary">LogIn</AwesomeButton>
                          {/* <Button color="primary" onClick={() => this.navigateToLogin()} >LogIn</Button> */}
                        </Col>
                      </div>
                    <DropdownItem>
                      Orders
                    </DropdownItem>
                    <DropdownItem>
                      Wishlist
                    </DropdownItem>
                    <DropdownItem>
                      Gift cards
                    </DropdownItem>
                    <DropdownItem>
                      Contact Us
                    </DropdownItem>
                    <DropdownItem>
                      Syntra Insiders
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Myntra Credits
                    </DropdownItem>
                    <DropdownItem>
                      PhonePe Wallet
                    </DropdownItem>
                    <DropdownItem>
                      Coupones
                    </DropdownItem>
                    <DropdownItem>
                      Saved Cards
                    </DropdownItem>
                    <DropdownItem>
                      Saved Addresses
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              <NavItem>
                <NavLink href="https://www.myntra.com/wishlist"><i className="fa fa-thumb-tack" aria-hidden="true"></i>Wishlist</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.myntra.com/checkout/cart"><i className="fa fa-user" aria-hidden="true"></i>Bag</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}