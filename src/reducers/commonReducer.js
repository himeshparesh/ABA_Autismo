// import {TYPE, returnToDispatch} from './actionTypes';
// import { postDataApi } from '../apiManager/commonApi';

// const initialState = {
//   error: '',
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case TYPE.DEFAULT.REQUEST:
//       return {
//         ...state,
//       };
//     case TYPE.DEFAULT.SUCCESS:
//       return {
//         ...state,
//       };
//     case TYPE.DEFAULT.FAILURE:
//       return {
//         ...state,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const getResponseFor = ({
//   url = '',
//   header = {},
//   onSuccess = () => {},
//   onFailure = () => {},
// //   showAlert = true,
// }) => {
  
//   return dispatch => {
//     returnToDispatch(dispatch, TYPE.DEFAULT.REQUEST);
    
//       postDataApi(url, header)
//       .then(response => {
//         returnToDispatch(dispatch, TYPE.DEFAULT.SUCCESS, response.data);
//         if (onSuccess) {
//           setTimeout(() => {
//             onSuccess(response);
//           }, 500);
//         }
//       })
//       .catch(error => {
//         console.log("error in catch block:"+ JSON.stringify(error))
//         returnToDispatch(dispatch, TYPE.DEFAULT.FAILURE, error);
//         // setTimeout(() => {
//           onFailure(error);
//         //   U.utility.handleError(error, showAlert);
//         // }, 500);
//       });
//   };
// };
