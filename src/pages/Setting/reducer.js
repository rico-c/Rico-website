export function changeLanguage(lang) {
  return {
    type: 'CHANG_LANGUAGE',
    lang
  }
}

export function settingReducer(state = {lang: 'zh'}, action) {
  switch(action.type) {
    case 'CHANG_LANGUAGE': 
      return {...state, lang: action.lang};
    default: 
      return state;
  }
}