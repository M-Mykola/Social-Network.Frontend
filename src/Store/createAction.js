import { token_action } from "./action";

function token(value) {
  return {
    type: token_action,
    value,
  };
}

export default token;
