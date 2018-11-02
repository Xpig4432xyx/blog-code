import Actions from 'actions';

export default (state = {isLoading: false}, action) => {

  switch (action.type) {

    case Actions.types.common.SHOWLOADING:
      return {...state, isLoading: action.isLoading};
    case Actions.types.common.HIDELOADING:
      return {...state, isLoading: action.isLoading};

    default:
      return state;
  }
};
