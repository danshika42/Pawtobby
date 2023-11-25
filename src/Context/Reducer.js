export const initialState= { 
    Users:[],
    currentUserEmail:"",
    isLoggedIn:false
};

 
const reducer=(state,action)=>{  
    switch(action.type){
        case 'SET_ISLOGIN':
            return {
                ...state,
                isLoggedIn:action.value
            }
        case 'SET_USERS':
            return {
                ...state,
                Users:action.user
            }
        case 'SET_CURRENTUSEREMAIL':
            return {
                ...state,
                currentUserEmail:action.email
            }
        default:
            return state;
    }

}

export default reducer;


