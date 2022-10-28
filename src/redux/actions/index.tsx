import { userloginActioncreator } from '../types/actionCreatorType';

export const userLogin: userloginActioncreator = user => {
  return {
    type: 'LOGIN_CRED',
    payload: user,
  };
};
