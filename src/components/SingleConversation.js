import { useRef } from "react";
import { useContext } from "react";
import mainContext from "../context/mainContext";


function SingleConversation({id,convers}){
    const {chatModal, setChatModal,currentUser, conversations,setConversations} = useContext(mainContext)
    const textRef = useRef()
    function openChat(){
        setChatModal(true)
    }
    function sendMsg() {
        const newmessage = {
          sender: currentUser.username,
          text: textRef.current.value,
          time: Date.now()

        }
        const conversationIndex = conversations.findIndex(x => x.id === Number(id))

        const conversationCopy = [...conversations]
        conversationCopy[conversationIndex].messages.push(newmessage)
        setConversations(conversationCopy)
        
    }
    function deleteConversation() {

      
       const filteredConversation = conversations.filter(x => x.id !== Number(id)) 
       
      setConversations(filteredConversation)
    }
    
    return(
        <div className="d-flex flex-wrap"> 
            <div className="chatboxconversationWrapper">

           <div onClick={openChat} className="conversationCard">
                <img src={convers.getterimage} alt="" />
             <h2>Conversation with: <span>{convers.getter}</span></h2>
             <div><img onClick={deleteConversation} id="trashIcon" src="https://icon-library.com/images/trash-can-icon/trash-can-icon-15.jpg" alt="" /></div>
            </div>

          {chatModal && <div className="ChatBox">  {convers.messages.map(x => <div>
             
          <div className="ChatbubbleSender" style={x.sender === currentUser.username ? {justifyContent:"flex-end", backgroundColor:"#3f51b5"} : {justifyContent:"flex-start",backgroundColor:"gray"}}>
            <div className="sender">{x.sender}</div> :  <span>{x.text}</span>
                 </div>
                    </div>)}
        <div className="d-flex sending"> <textarea ref={textRef} name="" id="" cols="30" rows="10"></textarea>
       <button onClick={sendMsg}>Send Message</button> </div>
         </div>
       
}
            
             </div>
        </div>
    )
}

export default SingleConversation;