import React,{ useState,useEffect,useContext,useRef } from 'react'
import Topbar from '../../components/Topbar/Topbar'
import { Container,Row,Col } from 'react-bootstrap';
import MessengerFriends from '../../components/MessengerFriends/MessengerFriends'
import ActiveFriends from '../../components/ActiveFriends/ActiveFriends'
import MessageBox from '../../components/MessageBox/MessageBox'
import axios from 'axios'
import {AuthContext} from '../../Context/AuthContext';
import {io} from 'socket.io-client'

function Messenger() {
  const [conversation,setConversation] = useState([]);
  const [selectedConversationId,setSelectedConversationId]=useState(null);
  const [receiverId,setReceiverId]= useState(null);
  const {user}= useContext(AuthContext);
  const socket = useRef( ); 
  const [arrivalMessage,setArrivalMessage] = useState([]);

useEffect(() =>{
  socket.current = io("ws://localhost:8900");
  socket?.current?.on("getMessage",data => {
    console.log( "data is" ,data)
    setArrivalMessage({
      sender  : data.senderId,
      text:  data.text,
      createdAt: Date.now()
    })
  }) 
},[])

useEffect(() => {
  socket?.current.emit("addUser",user?._id);
  socket?.current.on("getUsers",(users)=>{
    console.log("users are",users)
  })

},[user])



useEffect(() => {
  const getConversation =  async () => {
    try {
      const cenversations =  await axios.get('/conversation/'+user._id);
     
      setConversation(cenversations.data)
    } catch (error) {
      console.log(error)
    }
  }
    getConversation();
  
  
  },[])
  
    return (
        <div>
             <Topbar />
          
            <Container fluid>
  <Row>
    <Col xs={2}><MessengerFriends conversation= {conversation} setSelectedConversationId={setSelectedConversationId} setReceiverId={setReceiverId} /></Col>
    <Col xs={8}> < MessageBox arrivalMessage={arrivalMessage} selectedConversationId={selectedConversationId} receiverId={receiverId} socket={socket} /> </Col>
    <Col xs={2} className="m-0 p-0"><ActiveFriends /></Col>
  </Row>
  
</Container>
        </div>
    )
}

export default Messenger
