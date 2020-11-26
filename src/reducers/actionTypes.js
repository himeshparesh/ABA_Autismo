
export const TYPE = {
  DEFAULT: {
    REQUEST: 'REQUEST',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
  },
};

export const returnToDispatch = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload,
  });
};
