import React, { useEffect, useState } from 'react'

function MainPage() {
  const [token,setToken]=useState()
  useEffect(()=>{
    setToken(window.localStorage.getItem('token'))

  },[])
  return (
    <>
    <div>
      
    </div>
    </>
   
  )
}

export default MainPage