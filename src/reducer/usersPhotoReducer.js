const usersPhotoReducer = (state, action) => {
  switch(action.type) {
    case 'SET_USERS_PHOTOS': 
      return action.payload;
    case 'ADD_USERS_PHOTOS':
      return [
        action.payload,
        ...state
      ]
    case "EDIT_USERS_PHOTO":
      return state.map((photoData) => {
        if (photoData.id === action.payload.id) {
          return { ...photoData, ...action.payload.updates };
        } else {
          return photoData;
        }
      });
    default:
      return state;
  }
};

export default usersPhotoReducer;