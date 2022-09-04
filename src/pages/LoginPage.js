import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react';
import mainContext from '../context/mainContext';
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {
  const {socket,setUser,setUserAge,regMsg,setRegMsg} = useContext(mainContext)
  const  nav = useNavigate()
  const nameRef = useRef()
  const passOneRef = useRef()
  const passTwoRef = useRef()
  const ageRef = useRef()

  const loginNameRef = useRef()
  const loginPassRef = useRef()

  const http =  async (url,data) => {
      const options = {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }

       const res = await fetch('http://localhost:4000' +url,options)
  return res.json()
  }

    const register = async () => {
      const user = {
        username: nameRef.current.value,
        passOne: passOneRef.current.value,
        passTwo: passTwoRef.current.value,
        age: ageRef.current.value,
      }
      const result = await http('/register', user)
      setRegMsg(result.message)
      console.log(result)
    }
    const login = async () => {
      const user = {
        username: loginNameRef.current.value,
        password: loginPassRef.current.value,
       
      }
      const result = await http('/login', user)
      console.log(result)
      if(result) {
        setUser(result.data)
      setUserAge(result.data.age)
      console.log(result.data.age)
        socket.emit('login', result.data)
        nav("/movies")
      }
    }
 
  return (
    <div className='d-flex'>

      <div className="grow1 d-flex j-center a-center flex-column register">
          <h1>Register</h1>
          <input ref={nameRef} type="text" placeholder='Name' />
          <input ref={passOneRef} type="text" placeholder='Password' />
          <input ref={passTwoRef} type="text" placeholder='Repeat password' />
          <input ref={ageRef} type="number" placeholder='Enter your age' />
          <button onClick={register}>Register</button>

          {regMsg && <h2>{regMsg} </h2>}
          
          
      </div>
      
      <div className="grow1 d-flex j-center a-center flex-column login">
        <h1>Login</h1>
        <input ref={loginNameRef} type="text" placeholder='Enter your Name'/>
        <input ref={loginPassRef} type="text" placeholder='Enter Password'/>
        <button onClick={login}>Login</button>
      </div>

    </div>
  )
}

export default LoginPage;
