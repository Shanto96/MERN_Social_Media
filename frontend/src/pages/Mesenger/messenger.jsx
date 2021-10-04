import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import { Container,Row,Col } from 'react-bootstrap';
import MessengerFriends from '../../components/MessengerFriends/MessengerFriends'
import ActiveFriends from '../../components/ActiveFriends/ActiveFriends'
import MessageBox from '../../components/MessageBox/MessageBox'
function Messenger() {
    return (
        <div>
             <Topbar />
          
            <Container fluid>
  <Row>
    <Col xs={2}><MessengerFriends/></Col>
    <Col xs={8}> < MessageBox/> </Col>
    <Col xs={2} className="m-0 p-0"><ActiveFriends /></Col>
  </Row>
  
</Container>
        </div>
    )
}

export default Messenger
