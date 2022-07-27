import { useRef } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import mainContext from "../context/mainContext";


const UserProfilePage = () => {
    const {conversations, setConversations, users , currentUser, msgModal, setMsgModal,msgId} = useContext(mainContext)
    const {id} = useParams()
    const msgRef = useRef()
    const nav = useNavigate()
    const userId = users.find(x => x.id === currentUser.id)
    function getSingleUser() {
        return users.find(x => x.id === Number(id))
    }
    const singleUser = getSingleUser()
    console.log(currentUser.id)
  function getReceiver() {
    return users.find(x => x.id === msgId )
  }
  const receiver = getReceiver()
    function openMessenger(){
        console.log(currentUser.id)
        console.log(userId.id)
        if(currentUser.id !== msgId) 
        setMsgModal(true)
         
    }
function sendMassage(){
    const conversation = {
        id: Date.now(),
        sender: currentUser.username,
        getter: receiver.username,
        getterimage: receiver.image,
        messages: [],
    }
    const singleMessange = {
        sender: currentUser.username,
        text: msgRef.current.value,
        time: Date.now(),
    }
    conversation.messages.push(singleMessange)
    setConversations([...conversations, conversation])
    nav("/conversations")
    
    
}
  console.log(conversations) 
  console.log(receiver.username)
return(
    <div className="SingleUserCard">
        
            <div> <img src={singleUser.image} alt="" /></div>
            <div className="d-flex flex-column">Username: {singleUser.username}</div>
            
        <button className="sendmsgButton" onClick={openMessenger}>Send {singleUser.username} Massage </button>

        

        {msgModal ? <div className="sendmsgModalmini">
        <input ref={msgRef} type="text" /> 
       <button onClick={sendMassage}>Send</button>

       </div>: "" }
    </div>
)
}

export default UserProfilePage;