import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import mainContext from './context/mainContext'
import { useState } from 'react';
import AllUsersPage from './pages/AllUsersPage';
import Toolbar from './components/Toolbar';
import UserProfilePage from './pages/UserProfilePage';
import ConversationPage from './pages/ConversationPage';



function App() {
const [error,setError] = useState("")
const [loginError, setLoginError] = useState("")
const [users, setUsers] = useState([])
const [loggedIn, setLoggedIn] = useState(false)
const [currentUser,setCurrentUser] = useState(null)
const [msgModal, setMsgModal] = useState(false)
const [msgId, setMsgId] = useState(0)
const [conversations, setConversations] = useState([])
const [conversationNumber, setConversationNumber] =useState(0)
const [chatModal, setChatModal] = useState(false)
const [showConversation, setShowConversations] = useState(false)
const state = {
  error,
  setError,
  users,
  setUsers,
  loggedIn,
  setLoggedIn,
  currentUser,
  setCurrentUser,
  loginError,
  setLoginError,
  msgModal, 
  setMsgModal,
  msgId, 
  setMsgId,
  conversations, 
  setConversations,
  chatModal, 
  setChatModal,
  showConversation, 
  setShowConversations,
  conversationNumber, 
  setConversationNumber

}

    return (

      <mainContext.Provider value={state}>

            <div className="App">
              <BrowserRouter>
              {loggedIn && <Toolbar/>}
                <Routes>
                  <Route path='/' element={<RegisterPage />}/>
                  <Route path='/login' element={<LoginPage />}/>
                  <Route path='/profile' element={<ProfilePage />}/>
                  <Route path='/allusers' element={<AllUsersPage />}/>
                  <Route path='/user/:id' element={<UserProfilePage />}/>
                  <Route path='/conversations' element={<ConversationPage/>}/>
              


                </Routes>

              </BrowserRouter>  
            </div>
</mainContext.Provider>
    );

}
export default App;


