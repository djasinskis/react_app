import React from 'react'
import MovieSeats from './MovieSeats'
import { useState } from 'react'
import SingleMovie from './SingleMovie'
import { useContext } from 'react'
import mainContext from '../context/mainContext'

const MoviesWrapper = () => {
  const {movies,socket,user} = useContext(mainContext)
    const [movieIndex, setMovieIndex] = useState(0)
    const [seatIndex, setSeatIndex] =useState(0)
    const [selectedSeats, setSelectedSeats]= useState([])
    const [movieID, setMovieID] = useState("07aa915d42")
   
console.log(movieID)
    const reserveSeats = () => {
      
      socket.emit("reserve",{movieID,seatIndex})
      socket.emit("updateMoney",user)
     
    }
  return (
    <div className='d-flex flex-wrap'>
      <div className='allMovies'><SingleMovie
        
        setMovieID={setMovieID}
       movieIndex={movieIndex} 
       movies={movies} 
       setMovieIndex={setMovieIndex} 
       /></div>

      <div className="allSeats">
        {movies.length > 0 && <div className='movieBanner'><h2>Showing tickets to movie:</h2>   <span>{movies[movieIndex].title} </span> </div>}
        
        
        
        {movies.length > 0 &&  <MovieSeats
        
        setSelectedSeats={setSelectedSeats}
        selectedSeats={selectedSeats}
        movieIndex={movieIndex}
       action={reserveSeats} 
       seatIndex={seatIndex} 
       setSeatIndex={setSeatIndex} 
       seats={movies[movieIndex].seats}/>}</div>
      
     
    </div>
  )
}

export default MoviesWrapper
