import api from '../api'

function login(key,value){
  return (dispatch)=>{
      if(key==='id'){
        dispatch({
          type:'LOGIN_CHANGE',
          payload:{
            id:value
          }
        })
      }else{
        dispatch({
          type:'LOGIN_CHANGE',
          payload:{
            password:value
          }
        })
      }
      
    }
  }

function realLogin(id,password){
  return async(dispatch)=>{
    try{
      console.log(id,password)
      let login = await api.post('/account/login',
      {
      'username':id,
      'password':password,
      }
      )
      window.localStorage.setItem('token',`${login.data}`)
      console.log(login,'login')
      dispatch({
        type:"LOGIN",
        payload:{
          token:`${login.data}`,
        }
      })
    }catch{
      alert('아이디나 비밀번호가 잘못된듯;')
      window.location.reload()
    }
  }
}
function signUp(id,password,username){
  return async()=>{
    try{
      console.log(id,password,username)
      let signup = await api.post('/account',
      {
        'userId':id,
        'userName':username,
        'userPassword':password
      }
      )
      console.log(signup)
      if(signup.status === 201){
        alert('회원가입 성공')
      }else {
        alert('회원가입 실패')
      }
    }catch{
      alert('에런디;')
    }
  }
}

function boardlist(){
  return async(dispatch)=>{
    try{
      let listup = await api.get('/board')
      console.log(listup.data)
      dispatch({
        type:'LIST_VIEW',
        payload:{
          mainlist:listup.data
        }
      })

    }catch{

    }
  }
}

  export const action = {
    login,realLogin,signUp,boardlist
  }
