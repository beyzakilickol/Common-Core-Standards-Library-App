let token = localStorage.getItem('jsonwebtoken')

const initialState = {
  token: token? token: '',
   username:'',
   userType: '',
   userid: '',
}

const reducer = (state = initialState, action) => {
  if(action.type == "AUTHENTICATED"){
    return {
      ...state,
      token : action.token}
    } else if(action.type == "USER"){
      return {
        ...state,
        username : action.user.username,
        userType: action.user.usertype,
        userid: action.user.userid}

   }else if(action.type == "DELETETOKEN"){

       return {
        state:initialState
       }
   }
 return state
}

export default reducer
