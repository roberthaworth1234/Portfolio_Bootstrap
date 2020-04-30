
import React, { Component } from 'react'
import IndividualExperience from './IndividualExperience'
import { Card, Button } from 'react-bootstrap'


export default class Experience extends Component {
  state = {
    toggled: false
  }
  render() {
    const { project } = this.props;
    if (this.state.toggled ) {
      return <IndividualExperience handleToggle={this.handleToggle}project={project} />
    } else {
      return (
      <Card className="mb-5 d-flex flex-column align-items-center">
        <Card.Img className="my-2"variant="top" src={project.icon}></Card.Img>
        
          <Card.Text className="px-2 text-center">
            {project.title}
          </Card.Text>
       
        <Button onClick={this.handleToggle} className="p-2 m-2 btn btn-info">Show</Button>
      </Card>
    );
  }
  }
  handleToggle=()=>{
    this.setState({ toggled: !this.state.toggled})
  }
}

