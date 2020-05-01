import React from 'react'
import {Container} from 'react-bootstrap'

export default function LogoHeader() {
  return (
    <Container fluid className='text-center'>
      {/* <Row> */}
      {/* <Col md={{ span: 6, offset: 3 }}> */}
     
        <img src={require('../Images/logoRH1.png')} alt="Rob Haworth Logo"/>
    
      {/* </Col> */}
      {/* </Row> */}
    </Container>
  )
}
