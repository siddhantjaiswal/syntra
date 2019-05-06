import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './../header.css'

class SelectedComponent extends Component {
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }


  render() {
    return (
      <div>
        <ButtonGroup>
          <Button outline color="secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Men</Button>
          <Button outline color="secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Women</Button>
          <Button outline color="secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Kids</Button>
          <Button outline color="secondary" onClick={() => this.onRadioBtnClick(4)} active={this.state.rSelected === 4}>Home</Button>
          <Button outline color="secondary" onClick={() => this.onRadioBtnClick(5)} active={this.state.rSelected === 5}>Discover</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default SelectedComponent;
