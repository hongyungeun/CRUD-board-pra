let initialState = {
  token:''
}

function loginReducer(state=initialState, action) {
  let {type,payload}= action
  switch(type){
    case "LOGIN":
      return{
        ...state,
        token:payload
      }
      default: return {...state}
  }
}

export default loginReducer