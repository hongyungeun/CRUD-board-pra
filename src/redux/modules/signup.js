let initialState = {
  signup:false
}

function signup(state=initialState,action){
  let {type,payload}= action
  switch(type){
    case "SIGNUP":
      return{
        ...state,
        signup:true
      }
    
      default: return {...state}
  }

}
export default signup