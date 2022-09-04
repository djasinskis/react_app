import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import io from "socket.io-client"
import { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage';
import mainContext from './context/mainContext'
import MoviePage from './pages/MoviePage';





const socket = io.connect("http://localhost:4000")


function App() {
      const [user,setUser] = useState(null)
      const [movies, setMovies] = useState([])
      const [userAge,setUserAge] = useState(0)
      const [selectedSeats, setSelectedSeats] = useState([])
      const [regMsg, setRegMsg] = useState('')
    
      
      

 useEffect(  () =>{
    socket.on("movieTime", data =>{
      
      
      const filteredMovies = data.filter(x=> x.viewerAge< userAge)
      setMovies(filteredMovies)
      
    })
  
    socket.on("login", user =>{
      setUser(user)
    })
    
 },[userAge])

console.log(movies)
    return (
      
            <div className="App" >
            <mainContext.Provider value={{socket,setUser,movies,user,setUserAge,userAge,selectedSeats,setSelectedSeats,setRegMsg,regMsg,}}>  
                  <BrowserRouter>
                        <Routes>

                            <Route path='/' element={<LoginPage/>}/>
                            <Route path='/movies' element={<MoviePage/>}/>
                        

                        </Routes>
              
              
              
                  </BrowserRouter>



            </mainContext.Provider>
              
           
     
            </div>

    );

}
export default App;


