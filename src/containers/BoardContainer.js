import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {action} from '../redux/actions/action'
function BoardContainer() {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let token =  window.localStorage.getItem('token')
  const boardlist = useSelector((state)=>state.reducer)
  
  useEffect(()=>{
    dispatch(action.boardlist())
    
  },[])
  console.log(boardlist)
  console.log(boardlist.mainlist)
  
  const listClick = (item)=>{
    dispatch(action.board_detail(item.id,token,item.writer))
    navigate(`/board-page/${item.id}`)
  }

  return (
    <div>
      {
        boardlist.loading ? <></>
        :
        // <></>
        <div className='board_wrap'>
          <div className='board_title_wrap'>
            <p>번호</p>
            <p>제목</p>
            <p>작성날짜</p>
          </div>
          <>
          { boardlist?.mainlist.map((item) => 
              <div className='board_list_wrap' key={item.id} onClick={()=>listClick(item)}>

                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.createdDate}</p>
              </div>
            )}
          </>
        </div>
      }
      
      
    </div>
  )
}

export default BoardContainer