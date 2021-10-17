import React,{ useState,useEffect,useContext} from 'react'
import Topbar from '../../components/Topbar/Topbar'
import { Container,Row,Col } from 'react-bootstrap';
import MessengerFriends from '../../components/MessengerFriends/MessengerFriends'
import ActiveFriends from '../../components/ActiveFriends/ActiveFriends'
import MessageBox from '../../components/MessageBox/MessageBox'
import axios from 'axios'
import {AuthContext} from '../../Context/AuthContext';
function Messenger() {
  const [conversation,setConversation] = useState([]);
  const [selectedConversationId,setSelectedConversationId]=useState(null);
  const {user}= useContext(AuthContext);
useEffect(() => {
  const getConversation =  async () => {
    try {
      const cenversations =  await axios.get('/conversation/'+user._id);
      console.log(cenversations.data)
      setConversation(cenversations.data)
    } catch (error) {
      console.log(error)
    }
  }
    getConversation();
    console.log("conversation called");
  
  },[])
  
    return (
        <div>
             <Topbar />
          
            <Container fluid>
  <Row>
    <Col xs={2}><MessengerFriends conversation= {conversation} setSelectedConversationId={setSelectedConversationId} /></Col>
    <Col xs={8}> < MessageBox selectedConversationId={selectedConversationId} /> </Col>
    <Col xs={2} className="m-0 p-0"><ActiveFriends /></Col>
  </Row>
  
</Container>
        </div>
    )
}

export default Messenger
