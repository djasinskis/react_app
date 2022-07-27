import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import mainContext from "../context/mainContext";


function SingleProfile({users}) {
    const { setMsgModal, setMsgId} = useContext(mainContext)
const nav = useNavigate()
function openSinglecard(){
    setMsgId(users.id)
  setMsgModal(false)
  nav("/user/" + users.id)
}
console.log(users)
    
    return(
        <div className="userCards" onClick={openSinglecard}>
            <div> <img src={users.image} alt="" />  </div>
            <div> {users.username}</div>
        </div>
    )
}

export default SingleProfile;