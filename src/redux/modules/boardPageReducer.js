let initialState={
  title:'',
  content:'',
  writer:'',
  view:'',
  createdDate:'',
  loading:true
}

function boardPageReducer(state=initialState,action){
  let {type,payload} = action
  switch (type) {
    case 'BOARD_DETAIL_PAGE':
      return{
        ...state,
        title:payload.title,
        content:payload.content,
        writer:payload.writer,
        view:payload.view,
        createdDate:payload.createdDate,
        loading:false
      }
      break;
  
    default: return {...state}
      break;
  }
}
export default boardPageReducer