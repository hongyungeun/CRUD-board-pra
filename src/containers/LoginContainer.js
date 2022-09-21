import React,{useEffect,useState} from 'react'
import LoginComponents from '../components/LoginComponents'
import {useSelector,useDispatch} from 'react-redux'
import {action} from '../redux/actions/action'
import { Link, useNavigate } from 'react-router-dom'
function LoginContainer() {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const [id,setId] = useState('')
  const [pass,setPass] = useState('')
  const login =useSelector((state)=>state.loginReducer)
  const btnClick = ()=>{
    dispatch(action.realLogin(id,pass))
  }
  const idChange = (e)=>{
    setId( e.target.value)
  }
  const passChange = (e)=>{
    setPass( e.target.value)
  }
  useEffect(()=>{
    if(login.token === ''){

    }else {
      navigate('/main')
    }
  },[login.token])
  return (
    <div className='main_login_wrap' >
      
      <div className="sign_wrap">
        <div className='form' >
          <h2>Sign in</h2>
          <div className="inputBox">
            <input type="text" required="required"  name='id' onChange={idChange} value={id} autoComplete="off" />
            <span>UserId</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required="required"  name='password' onChange={passChange} value={pass} autoComplete='off'/>
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <p href="#">Forgot Password ?</p>
            <Link to='/sign-up'>Signup</Link>
          </div>
          <input type="submit" value="Login" className='login_input' onClick={btnClick}/>
        </div>
      </div>
    </div>
  )
}

export default LoginContainer