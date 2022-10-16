let initialState={
  id:'',
  token:'',

  logincheck:'',
  loading:true
}

function boardDetailReducer(state=initialState,action){
  let {type,payload} = action
  switch (type) {
    case 'BOARD_DETAIL':
      return{
        ...state,
        id:payload.id,
        token:payload.token,
        
        logincheck:payload.logincheck.data,
        loading:false
      }
      break;
  
    default: return {...state}
      break;
  }
}
export default boardDetailReducer