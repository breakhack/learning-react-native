import { EMPLOYEE_UPDATE } from "../actions/types";

const initialState = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.key]: action.payload.value };
    case EMPLOYEE_CREATE:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
}