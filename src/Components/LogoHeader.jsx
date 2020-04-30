import React from 'react'
import {Container} from 'react-bootstrap'

export default function LogoHeader() {
  return (
    <Container fluid className='text-center'>
      {/* <Row> */}
      {/* <Col md={{ span: 6, offset: 3 }}> */}
      <div><img src={require('../Images/logoRH.png')} alt="Rob Haworth Logo"/></div>
      {/* </Col> */}
      {/* </Row> */}
    </Container>
  )
}
