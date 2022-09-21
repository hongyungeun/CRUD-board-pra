import React,{useEffect,useState} from 'react'

function MyPageContainer() {
  const [token,setToken]=useState()
  useEffect(()=>{
    setToken(window.localStorage.getItem('token'))

  },[])
  return (
    <div>
      {token?
      <p>로그인하셈; 5초뒤에 가버림;</p>:
      <>
        <div>마이페이지</div>
        <div>
          <p>username</p>
          <p>userid</p>
          <p>로그아웃</p>

        </div>
      </>
    }
      
    </div>
  )
}

export default MyPageContainer