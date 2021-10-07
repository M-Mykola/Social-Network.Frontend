import { token_action } from "./action";
function reducer(state, action) {
  switch (action.type) {
    case token_action:
      return { token: action.value };
    default:
      return state;
  }
}

export default reducer;
