import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import { Container,Row,Col } from 'react-bootstrap';
import MessengerFriends from '../../components/MessengerFriends/MessengerFriends'
function Messenger() {
    return (
        <div>
             <Topbar />
          
            <Container fluid>
  <Row>
    <Col xs={2}><MessengerFriends/></Col>
    <Col xs={8}>Messege</Col>
    <Col xs={2}>Active</Col>
  </Row>
  
</Container>
        </div>
    )
}

export default Messenger
