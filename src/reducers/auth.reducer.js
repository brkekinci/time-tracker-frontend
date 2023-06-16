import { SIGN_UP, SIGN_IN } from "../actions/types";

import { CLEAR_DATA } from "../actions/types";

const initialState = {
  isSignedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, isSignedIn: action.payload };
    case SIGN_IN:
      return { ...state, isSignedIn: action.payload };
    case CLEAR_DATA:
      return {
        ...state,
      };
    default:
      return state;
  }
};
