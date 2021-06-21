export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PHOTO":
      return [action.payload, ...state];
    // [ {}, {}, {} ]
    case "DELETE_PHOTO":
      return state.filter(({ id }) => id !== action.payload);
    case "EDIT_PHOTO":
      return state.map((photoData) => {
        if (photoData.id === action.payload.id) {
          console.log("reducer worked");
          return { ...photoData, ...action.payload.updates };
        } else {
          return photoData;
        }
      });
    case "SET_PHOTO":
      return action.payload;
    default:
      return state;
  }
};
