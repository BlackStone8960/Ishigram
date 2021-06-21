const usersPhotoReducer = (state, action) => {
  switch(action.type) {
    case 'SET_USERS_PHOTOS': 
      return action.payload;
    case 'ADD_USERS_PHOTOS':
      return [
        ...state,
        action.payload
      ]
    default:
      return state;
  }
};

export default usersPhotoReducer;