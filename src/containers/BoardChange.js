import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {action} from '../redux/actions/action'
function BoardChange() {
  const {id} = useParams()
  let dispatch = useDispatch()
  let token =  window.localStorage.getItem('token')
  let navigate = useNavigate()


  const thisPage = useSelector((state)=>state.boardPageReducer)
  const check = useSelector((state)=>state.boardDetailReducer)
  
  

  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')

  const titleChange = (e)=>{
    setTitle(e.target.value)
  }
  const conetentChange = (e)=>{
    setContent(e.target.value)
  }

  const changeClick = ()=>{
    dispatch(action.writeChange(token,title,content,id))
    alert('수정됨')
    navigate('/main')
  }
  const cancel = ()=>{
    navigate('/main')
  }
  
  
  useEffect(()=>{
    dispatch(action.boardDetailPage(id))
    dispatch(action.boardDetail(id,token,))
    setTitle(thisPage.title)
    setContent(thisPage.content)
  },[]) 

  useEffect(()=>{
    setTitle(thisPage.title)
    setContent(thisPage.content)
  },[thisPage])

  return (
    <div>
      {check.loding ? <div>로딩중</div>:<div>{thisPage.writer===check.logincheck?
        <div>
          <input type='text' onChange={titleChange} value={title}/>
          <textarea value={content} onChange={conetentChange}>

          </textarea>
          <div onClick={changeClick}>확인</div>
          <div onClick={cancel}>취소</div>
        </div> 
        :<>님 작성자아닌듯;</> 
      }</div>}
      
    </div>
  )
}

export default BoardChange