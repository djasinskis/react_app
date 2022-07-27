import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import mainContext from "../context/mainContext";

const LoginPage = () => {
    const {loginError, users,setLoggedIn,setCurrentUser,setLoginError} = useContext(mainContext)
    const usernameRef  = useRef()
    const passwordRef = useRef()
    const nav = useNavigate()

function login(){
    const user = {
       
        username: usernameRef.current.value,
        password: passwordRef.current.value,
    }

if(!users.find(x => x.username === user.username && x.password === user.password))
return setLoginError("Username not found!")

const loggedUser = users.find(x => x.username === user.username && x.password === user.password)


setCurrentUser(loggedUser)
setLoggedIn(true)
nav("/profile")
}
    return(
        <div className="RegisterPage">
           <h2>Login</h2>
           <input ref={usernameRef} type="text" placeholder="Enter username" />
           <input ref={passwordRef} type="text" placeholder="Enter password" />
           <button onClick={login} className="regbutton">Login</button>

           <h2>{loginError}</h2>
        </div>
    )
}

export default LoginPage;