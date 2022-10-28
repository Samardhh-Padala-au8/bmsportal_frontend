import { actionIds } from 'redux/types/actionsType';

const submitState = {
  track: null,
  image: null,
  music: null,
  login: null,
  snapchat: null,
  facebook: null,
  google: null,
  forgotpassword: null,
  resetpassword: null,
  userdata: null,
  snapdata: null,
  copyright: null,
};

const submitReducer = (state = submitState, action) => {
  const data = action.payload;
  switch (action.type) {
    case actionIds.SUBMIT_TRACK_RESPONSE:
      return { ...state, track: action.payload };
    case actionIds.NULL_BEAT_RESPONSE:
      return { ...state, track: null };
    case actionIds.UPLOAD_IMAGE_RESPONSE:
      return { ...state, image: action.payload };
    case actionIds.UPLOAD_MUSIC_RESPONSE:
      return { ...state, music: action.payload };
    case actionIds.LOGIN_RESPONSE:
      localStorage.setItem('token', data.tokens.access.token);
      localStorage.setItem('userId', data.user.id);
      return { ...state, login: action.payload };
    case actionIds.SNAPCHAT_RESPONSE:
      localStorage.setItem('token', data.tokens.access.token);
      localStorage.setItem('userId', data.user.id);
      return { ...state, snapchat: action.payload };
    case actionIds.FACEBOOK_RESPONSE:
      localStorage.setItem('token', data.tokens.access.token);
      localStorage.setItem('userId', data.user.id);
      return { ...state, facebook: action.payload };
    case actionIds.GOOGLE_RESPONSE:
      localStorage.setItem('token', data.tokens.access.token);
      localStorage.setItem('userId', data.user.id);
      return { ...state, google: action.payload };
    case actionIds.FORGOTPASSWORD_RESPONSE:
      return { ...state, forgotpassword: action.payload };
    case actionIds.RESETPASSWORD_RESPONSE:
      return { ...state, resetpassword: action.payload };
    case actionIds.SEND_DATA_RESPONSE:
      return { ...state, userdata: action.payload };
    case actionIds.SEND_SNAP_DATA_RESPONSE:
      return { ...state, snapdata: action.payload };
    case actionIds.POST_COPYRIGHT_RESPONSE:
      return { ...state, copyright: action.payload };
    default:
      return state;
  }
};

export { submitReducer };
