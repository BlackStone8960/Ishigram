const usersPhotoReducer = (state, action) => {
  switch(action.type) {
    case 'SET_USERS_PHOTOS': 
      return action.payload;
    case 'ADD_USERS_PHOTOS':
      return [
        action.payload,
        ...state
      ]
    default:
      return state;
  }
};

export default usersPhotoReducer;