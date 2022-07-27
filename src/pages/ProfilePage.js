import { useContext } from "react";
import { useRef } from "react";

import mainContext from "../context/mainContext";
const ProfilePage = ({id}) => {
    const urlRef = useRef()
    const passRef = useRef()
    const {setUsers, users, currentUser,setCurrentUser} = useContext(mainContext)

    function changeImg(){
         const myUser = {...currentUser}
        myUser.image = urlRef.current.value
        setCurrentUser(myUser)
        const id = currentUser.id
        const usersIndex = users.findIndex(x => x.id === Number(id))
        
        const usersCopy = [...users]
        usersCopy[usersIndex].image = urlRef.current.value
        setUsers(usersCopy)
      
        
    }
    function changePassword(){
        const myUser = {...currentUser}
        myUser.password = passRef.current.value
        setCurrentUser(myUser)
        const id = currentUser.id
        const usersIndex = users.findIndex(x => x.id === Number(id))
          const usersCopy = [...users]
        usersCopy[usersIndex].password = passRef.current.value
        setUsers(usersCopy)
      
        
    }
    return(
        <div>
            
            <div className="profilecard">

                <div> <img src={currentUser.image} alt=""/></div>
                <div>
                    <h2>{currentUser.username}</h2>
                </div>
                
                <div className="d-flex flex-column">
                    <div>    <input ref={urlRef} type="text" placeholder="image url"/>
            <button onClick={changeImg}>Change Image</button></div>
                
            <div><input ref={passRef} type="text" placeholder="change password"/>
            <button onClick={changePassword}>Change Password</button>
            <div>Current password: {currentUser.password}</div>
            </div>
            
            
                </div>
            
            

            
           
        </div>
        </div>
    )
}

export default ProfilePage;