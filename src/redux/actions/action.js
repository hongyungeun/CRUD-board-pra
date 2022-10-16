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
  return async(dispatch)=>{
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
        dispatch(({
          type:'SIGNUP',
          payload:{
            signup:true
          }
        }))
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

function boardDetail(id,token,user){
  return async(dispatch)=>{
    try{
      console.log(id,token,user)
      let check = await api.get('account/login-check',{headers:{
        Authorization:`Bearer ${token}`,
      }})
      console.log(check)
      dispatch({
        type:'BOARD_DETAIL',
        payload:{
          'id':id,
          'token':token,
          'logincheck':check,
          'loding':false
        }
      })
    }catch{
      console.log('board_detail error')
    }
  }
}

function boardDetailPage(id){
  return async(dispatch)=>{
    try {
      
      let detail = await api.get(`/board/${id}`)
      console.log(detail)
      dispatch({
        type:'BOARD_DETAIL_PAGE',
        payload:{
          'title':detail.data.title,
          'content':detail.data.content,
          'writer':detail.data.writer,
          'view':detail.data.view,
          'createdDate':detail.data.createdDate,
          'loading':false
        }
      })
    } catch{
      console.log('boardDetailPage error')
    }
  }
}

  function writeChange (token,title,content,id){
    return async(dispatch)=>{
      console.log(token)
      try{
        let listWriteChange = await api.patch(`/board/${id}`,{
          'content': `${content}`
          ,'title': `${title}`
        },
        {
          headers:{
          Authorization:`Bearer ${token}`,
          },
          
        },
        
        )
        console.log(listWriteChange)
        
      }catch{
        console.log('writeChange error')
      }
    }
  }
  function write (token,){
    return async(dispatch)=>{
      try{
        let listWrite = await api.post(`/board`,{headers:{
          Authorization:`Bearer ${token}`,
        }})
        console.log(listWrite)
        
      }catch{
        console.log('write error')
      }
    }
  }
  function del(id,token){
    return async(dispatch)=>{
      try {
        let del = await api.delete(`/board/${id}`,{headers:{Authorization:`Bearer ${token}`}})
        console.log(del)
      } catch {
        console.log('del error')
      }
    }
  } 
  export const action = {
    login,realLogin,signUp,boardlist,boardDetail,boardDetailPage,write,writeChange,del
  }
