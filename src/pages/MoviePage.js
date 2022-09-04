import React from 'react'


import { useContext } from 'react'
import MoviesWrapper from '../components/MoviesWrapper'

import mainContext from '../context/mainContext'

const MoviePage = () => {
  
    const {user} = useContext(mainContext)
    const money = Number(user.money).toFixed(2)
   
  return (

    <div>

        {user && <div className='userToolbar'>
            <h3>Money: {money} $</h3>
             <h3>{user.username} (Age: {user.age})</h3></div> }
    <div className='d-flex'>
       <MoviesWrapper />
    

    </div>
    </div>
  )
}

export default MoviePage
