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
      token: action.token,

}
}
     else if(action.type == "USER"){
      return {
        ...state,
        username : action.user.username,
        userType: action.user.usertype,
        userid: action.user.userid,
        cartcount: action.user.cartcount
      }

   }else if(action.type == "DELETETOKEN"){

       return {
        state:initialState
       }
   }else if(action.type == "SUBJECTID"){

       return {
        ...state,
        subjectid: action.subjectid
       }
   }else if(action.type == "RESUMESUBJECTID"){

       return {
        ...state,
        subjectid: ''
       }
   }
   else if(action.type == "UPDATEUSERTYPE"){

       return {
        ...state,
        userType: 'seller'
       }
   }else if(action.type == "EDITORVALUE"){

       return {
        ...state,
        editorvalue: action.editorvalue
       }
   }else if(action.type == "PRODUCTID"){

       return {
        ...state,
        productid: action.productid
       }
   }else if(action.type == "FILEURL"){

       return {
        ...state,
        fileurl: action.fileurl
       }
   }
 return state
}

export default reducer
