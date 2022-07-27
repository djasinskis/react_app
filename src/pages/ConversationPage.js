import { useEffect } from "react";
import { useContext } from "react";
import SingleConversation from "../components/SingleConversation";
import mainContext from "../context/mainContext";

function ConversationPage(){
    const {conversations,currentUser,showConversation, setShowConversations, setConversationNumber,setChatModal} = useContext(mainContext)
  
    function loggedUserconvers() {
        return conversations.find(x => x.getter === currentUser.username || x.sender === currentUser.username) || {}
    }
    const loggedUserConversations = loggedUserconvers()

   
    if(loggedUserConversations.sender === currentUser.username || loggedUserConversations.getter === currentUser.username) {
        setShowConversations(true)
    } else{
        setShowConversations(false)
        setConversationNumber(0)
    }
     

     
    console.log(loggedUserConversations)
   
    return(
        <div >
            
            {showConversation && <button onClick={()=> setChatModal(false)} className="closebutton">Close Chat</button>}
           <div className="d-flex flex-wrap">
            {showConversation && conversations.map((x,i) => <SingleConversation id={x.id} key={i} convers={x}/>)}
            </div> 

        </div>
    )
}

export default ConversationPage;