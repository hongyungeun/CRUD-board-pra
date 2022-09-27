import React, { useState,useReducer, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from '../css/signup.module.css'
import { action } from '../redux/actions/action'
import {AiFillMinusCircle,AiFillDownCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
function SignUpcontainer() {
  
  let dispatch = useDispatch()
  let navigate = useNavigate()

  const [low1,setLow] = useState(false);
  const [upper1,setUpper] = useState(false);
  const [number1,setNumber] = useState(false);
  const [special1,setSpecial] = useState(false);
  const [length1,setLength] = useState(false);
  const [total,setTotal] = useState(false)

  const [id,setId] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')
  
  const signup =useSelector((state)=>state.signup)
  
  function idChange(e){
    setId(e.target.value)
  }
  function passChange(e){
    setPassword(e.target.value)
  }
  function nameChange(e){
    setName(e.target.value)
  }
  function btnClick(){
    if(id !=='' && total && name !==''){
      dispatch(action.signUp(id,password,name))
      
    }else {
      alert('비어있는값 채우셈;')
    }
    
  }
  function checkPass(e){
    setPassword(e.target.value)
    let lower = new RegExp('(?=.*[a-z])');
    let upper = new RegExp('(?=.*[A-Z])');
    let number = new RegExp('(?=.*[0-9])');
    let special = new RegExp('(?=.*[!@#\$%\^&\*])');
    let length = new RegExp('(?=.{8,})');
    
    
    if(lower.test(e.target.value)){
      setLow(true)
    }else {
      setLow(false)
    }
    if(upper.test(e.target.value)){
      setUpper(true)
    }else {
      setUpper(false)
    }
    if(number.test(e.target.value)){
      setNumber(true)
    }else {
      setNumber(false)
    }
    if(special.test(e.target.value)){
      setSpecial(true)
    }else {
      setSpecial(false)
    }
    if(length.test(e.target.value)){
      setLength(true)
    }else {
      setLength(false)
    }
    if(low1 && upper1 && number1 && special1 && length1){
      setTotal(true)
    }else {
      setTotal(false)
    }
  }
  useEffect(()=>{
    if(total){
      setTotal(true)
    }else if(total === false){
      setTotal(false)
    }
  },[total])
  useEffect(()=>{
    if(signup.signup){
      navigate('/main')
    }else {

    }
  },[signup])
  return (
    <div className={style.wrap}>
      <div className='inner_wrap form'>
        
        <h2>Sign Up</h2>
        <div className="inputBox">
          <input type="text" name='id' onChange={idChange} value={id} autoComplete="off" />
          <span>UserId</span>
          <i></i>
        </div>
        
        <div className="inputBox">
          <input type="password" name='pssword' onChange={checkPass} onKeyUp={checkPass} value={password} autoComplete="off" />
          <span>UserPassword</span>
          <i></i>
        </div>
        {total?<div className='pass_check_wrap on'>
          {low1?<p className='on'><AiFillDownCircle/>At least one lowercase character</p>:<p><AiFillMinusCircle/>At least one lowercase character</p>}
          {upper1?<p className='on'><AiFillDownCircle/> At least one uppercase character</p>:<p><AiFillMinusCircle />At least one uppercase character</p>}
          {number1?<p className='on'><AiFillDownCircle/>At least one number</p>:<p><AiFillMinusCircle />At least one number</p>}
          {special1?<p className='on'><AiFillDownCircle/>At least one special character</p>:<p><AiFillMinusCircle />At least one special character</p>}
          {length1?<p className='on'><AiFillDownCircle/>At least 8 character</p>:<p><AiFillMinusCircle />At least 8 character</p>}
        </div>:<div className='pass_check_wrap'>
          {low1?<p className='on'><AiFillDownCircle/>At least one lowercase character</p>:<p><AiFillMinusCircle/>At least one lowercase character</p>}
          {upper1?<p className='on'><AiFillDownCircle/> At least one uppercase character</p>:<p><AiFillMinusCircle />At least one uppercase character</p>}
          {number1?<p className='on'><AiFillDownCircle/>At least one number</p>:<p><AiFillMinusCircle />At least one number</p>}
          {special1?<p className='on'><AiFillDownCircle/>At least one special character</p>:<p><AiFillMinusCircle />At least one special character</p>}
          {length1?<p className='on'><AiFillDownCircle/>At least 8 character</p>:<p><AiFillMinusCircle />At least 8 character</p>}
        </div>}
        
        
        <div className="inputBox">
          <input type="text" name='name' onChange={nameChange} value={name} autoComplete="off" />
          <span>UserName</span>
          <i></i>
        </div>
        <input type="button" value="회원가입 완료" className='login_input signup_btn' onClick={btnClick}/>
      </div>
    </div>
  )
}

export default SignUpcontainer