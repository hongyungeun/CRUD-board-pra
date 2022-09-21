import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {action} from '../redux/actions/action'
function BoardContainer() {
  let dispatch = useDispatch()
  
  const boardlist =useSelector((state)=>state.reducer)
  useEffect(()=>{
    dispatch(action.boardlist())
    
  },[])
  console.log(boardlist)
  console.log(boardlist.mainlist)
  
  return (
    <div>
      {
        boardlist.loading ? <></>
        :
        // <></>
        (<>
          <p>hi1</p>
         { boardlist?.mainlist.map((item) => 
            <>
            {console.log(item)}
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.createdDate}</p>
              <p>hi</p>
            </>
          )}
        </>)
        
      }
      
      
    </div>
  )
}

export default BoardContainer