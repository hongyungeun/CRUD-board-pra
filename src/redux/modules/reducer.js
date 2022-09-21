let initialState = {
  id:'',
  password:'',
  mainlist:[],
  loding:true
}

function reducer(state=initialState, action) {
  let {type,payload}= action
  switch(type){
    case "LOGIN_CHANGE":
      return{
        ...state,
        id:payload.id,
        password:payload.password,
      }
    case 'LIST_VIEW':
      console.log(payload.mainlist)
      return{
        ...state,
        mainlist:payload.mainlist.dataList,
        loding:false
      }
      default: return {...state}
  }
}


export default reducer