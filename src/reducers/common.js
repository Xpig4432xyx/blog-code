import Actions from 'actions';

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  
  switch (action.type) {

    case Actions.types.common.SHOWLOADING:
      return {...state, isLoading: action.isLoading};
    case Actions.types.common.HIDELOADING:
      return {...state, isLoading: action.isLoading};

    default:
      return state;
  }
};
