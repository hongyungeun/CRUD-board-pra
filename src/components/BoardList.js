import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams,useParams, useNavigate } from 'react-router-dom'
import { action } from '../redux/actions/action'
function BoardList(title,content) {

  let navigate = useNavigate()
  let dispatch = useDispatch()

  const {id} = useParams()

  let thisPage = useSelector((state)=>state.boardPageReducer)
  let check = useSelector((state)=>state.boardDetailReducer)
  let token =  window.localStorage.getItem('token')
  const [query,setQuery] = useSearchParams() 
  const [authority,setAuthority] = useState(false)

  const change = ()=>{
    navigate(`/board-page/${id}/change`)
  }
  const del = ()=>{
    dispatch(action.del(id,token))
    alert('삭제됨;')
    navigate('/main')
  }
  useEffect(()=>{
    dispatch(action.boardDetailPage(id))
    dispatch(action.boardDetail(id,token,))
    console.log(thisPage,'thisPage')
    console.log(check,'check')
    if(thisPage.writer === check.logincheck){
      setAuthority(true)
    }else{
      setAuthority(false)
    }
  },[])

  return (
    <>
      {check.loding ? <div>로딩중</div> :
      <div>
        <div>{console.log(authority)}</div>
        <div>{console.log(thisPage,'thisPage')}</div>
        <div>{console.log(check,'check')}</div>
        <div>{thisPage.title}</div>
        <div>{thisPage.content}</div>
        <div>{thisPage.createdDate}</div>
        <div>{thisPage.view}</div>
        <div>{thisPage.writer}</div>
        <div>{thisPage.writer===check.logincheck? <div onClick={change}>수정</div>:<></>}</div>
        <div>{thisPage.writer===check.logincheck? <div onClick={del}>삭제</div>:<></>}</div>
      </div>
      } 
    </>
   
  )
}

export default BoardList