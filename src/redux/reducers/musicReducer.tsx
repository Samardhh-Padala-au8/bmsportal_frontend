import { actionIds } from 'redux/types/actionsType';

const musicState = {
  musicconstant: null,
  imageconstant: null,
  musictrimconstant: null,
  musicdata: null,
};

const musicReducer = (state = musicState, action) => {
  switch (action.type) {
    case actionIds.MUSIC_CONSTANT_RESPONSE:
      return { ...state, musicconstant: action.payload };
    case actionIds.IMAGE_CONSTANT_RESPONSE:
      return { ...state, imageconstant: action.payload };
    case actionIds.MUSIC_TRIM_CONSTANT_RESPONSE:
      return { ...state, musictrimconstant: action.payload };
    case actionIds.SUBMIT_DATA_RESPONSE:
      return { ...state, musicdata: action.payload };
    default:
      return state;
  }
};

export default musicReducer;
