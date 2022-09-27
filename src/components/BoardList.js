import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { action } from '../redux/actions/action'
function BoardList(title,content) {
  let dispatch = useDispatch()
  let check = useSelector((state)=>state.boardDetailReducer)

  const [authority,setAuthority] = useState(false)

  useEffect(()=>{
    console.log(check)
    
    dispatch(action.board_detal_page(check.id))
    if(check.id === check.logincheck){
      setAuthority(true)
    }else{
      setAuthority(false)
    }
  },[])

  return (
    <>
      {check.loding ? <div>로딩중</div> :
      <div>
        <p>{}</p>
        <div>{}</div>
        
      </div>
      } 
    </>
   
  )
}

export default BoardList