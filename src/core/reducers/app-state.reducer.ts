import { AppState } from "@core/interfaces";

export type Actions = { type: "ADD_USER_INFO"; payload: any } | { type: "CLEAN" };

export const initialState: AppState = Object({
  userInfo: {},
});

export const appStateReducer = (state: AppState, action: Actions): AppState => {
  switch (action.type) {
    case "ADD_USER_INFO":
      return {
        ...state,
        userInfo: action.payload,
      };
    case "CLEAN":
      return initialState;
    default:
      return state;
  }
};
