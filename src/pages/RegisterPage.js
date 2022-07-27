import { useContext } from "react";
import { useRef} from "react";
import { useNavigate } from "react-router-dom";
import mainContext from "../context/mainContext";

const RegisterPage = () => {
    const nav = useNavigate()
    const {error, setError, setUsers,users,loggedIn} = useContext(mainContext)
    const userRef = useRef()
    const passOneRef = useRef()
    const passTwoRef = useRef()

   
    function regnewUser(){
        
        const user = {
            id: Date.now(),
            image: <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" />,
            username: userRef.current.value,
            password: passOneRef.current.value,
            passwordTwo: passTwoRef.current.value
        }

        let formValidation = true
        if(user.username.length < 4 || user.username.length > 20){
        formValidation = false
        return setError("Username must be at least 4 letters, but not more than 20")
        } 
        if(user.password.match(/^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,20}$/)){
            formValidation = true
        }else{
            formValidation = false 
           return setError("Password must include 1 special char and one Upper Case letter")
        }
        if(user.passwordTwo !== user.password){
           formValidation = false
         return setError ("passwords does not match") 
        } 
        if(users.find(x => x.username === user.username)) {
             formValidation = false
        return setError("Username Already Exist! Choose Other!")
        }
       
        if(formValidation)

        setUsers([...users, user])
        if(loggedIn){
            nav("/allusers")
        }else{
            nav("/login")
        }
         setError("")
    }
    return(
        <div className="RegisterPage">
            <h1>Register new User</h1>
            <input ref={userRef} type="text" placeholder="Enter Username"/>
            <input ref={passOneRef}  type="text" placeholder="Enter Password"/>
            <input ref={passTwoRef} type="text" placeholder="Repeat Password"/>
                <h3>{error}</h3>
            <button onClick={regnewUser} className="regbutton">Register</button>
        </div>
    )
}

export default RegisterPage;