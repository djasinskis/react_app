import React from 'react'




const MovieSeats = ({socket,seats,setSeatIndex,action,seatIndex,error}) => {

 

  const getClass = (str,index) =>{
    
   let result =  str.length > 0 ? "seat checked": "seat"
     if(index === seatIndex) result += ' selected'


    return result
  } 
  

  
  return (
    <div className='d-flex flex-wrap'>
     <div className='grow1 d-flex Cinema'>
      <div className='seatsPlace'> {seats.map((x,i) =>  <div onClick={() => setSeatIndex(i) }  className={getClass(x.reserved,i)}key={i}> </div>)}
       </div>
       </div>
       <div className='grow1'>
        
        {seats[seatIndex].reserved.length === 0 ? 
        <div className='buttonBuy d-flex flex-column a-center'>
          <div>Ticket price: {seats[seatIndex].price} $</div>
          <div>Seat nr: {seatIndex+1}</div>
          {error && <h2>{error}</h2> }
          <button onClick={action}>Buy Tickets for selected seats
          
          </button>  </div> 
            :
         <div className='seatAlert d-flex j-center a-center'>Seat Already reserved !
          Check out other available seats.</div>}
        
        
       </div>
      
    </div>
  )
}

export default MovieSeats
