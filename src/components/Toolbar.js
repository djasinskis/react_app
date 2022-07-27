import { useContext } from "react";
import {Link} from "react-router-dom"
import mainContext from "../context/mainContext";
import {useNavigate} from 'react-router-dom'
function Toolbar(){

    const {currentUser,setLoggedIn, conversations, setLoginError,conversationNumber, setConversationNumber} = useContext(mainContext)
    const nav = useNavigate()
    setConversationNumber(conversations.length)
    function LogOut(){
        setLoginError("")
        setLoggedIn(false)
        nav("/login")
    }
    return( 
        <div className="toolbar">
            <div className="d-flex j-center">
                <Link to='/'> Register new User</Link>
            <button className="logoutbutton" onClick={LogOut}>Log Out</button>
            </div>
            <div className="loggedAs">Logged as: <span>{currentUser.username}</span></div>

            <div>
            <Link to='/allusers'>All users</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/conversations'>Conversations ({conversationNumber})</Link>

            </div>
            
        </div>
    )
}

export default Toolbar;