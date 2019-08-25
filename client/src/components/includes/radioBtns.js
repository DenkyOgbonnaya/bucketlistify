import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class RadioBtn extends Component {
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
    this.props.setDone(rSelected);
  }
  componentDidMount(){
    this.setState({ rSelected: this.props.done });
  }

  render() {
    return (
      <div>
        <ButtonGroup>
          <Button color="success" onClick={() => this.onRadioBtnClick(true)} active={this.state.rSelected === true}>True</Button>
          <Button color="success" onClick={() => this.onRadioBtnClick(false)} active={this.state.rSelected === false}>False</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default RadioBtn;