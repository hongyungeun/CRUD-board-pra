import React, { useEffect, useState } from 'react'
import BoardContainer from '../containers/BoardContainer'

function MainPage() {
  const [token,setToken]=useState()
  useEffect(()=>{
    setToken(window.localStorage.getItem('token'))

  },[])
  return (
    
    <div className='board_page_wrap'>
      <BoardContainer />  
    </div>
    
   
  )
}

export default MainPage