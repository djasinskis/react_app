import React from 'react'



const SingleMovie = ({movies,setMovieIndex,movieIndex,setMovieID}) => {
   
   const getClass =(num) =>{
    return movieIndex === num ? "movieCard selected" : "movieCard"
   }

    
  return (
    <div className='d-flex flex-wrap'>

        
      {movies.map((x,i) =>     <div key={i} className={getClass(i)} onClick={() =>{setMovieID(x.id);setMovieIndex(i)}}>
      <div>  <img src={x.image} alt="" /></div>

       <div>{x.title}</div>
      <div>N: {x.viewerAge}</div>
     
      <div>Seats Available: {x.freeSeats}  out of  {x.seats.length}</div>
      </div> )}
           
        
       
    </div>
  )
}

export default SingleMovie
