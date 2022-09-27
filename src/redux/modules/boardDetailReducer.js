let initialState={
  id:'',
  token:'',
  user:'',
  logincheck:'',
  loading:true
}

function boardDetailReducer(state=initialState,action){
  let {type,payload} = action
  switch (type) {
    case 'BOARD_DETAIL':
      return{
        ...state,
        id:payload,
        token:payload,
        user:payload,
        loading:false
      }
      break;
  
    default: return {...state}
      break;
  }
}
export default boardDetailReducer