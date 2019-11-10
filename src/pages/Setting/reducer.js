export function changeLanguage(lang) {
  return {
    type: 'CHANG_LANGUAGE',
    lang
  }
}

export function reducer(state, action) {
  switch(action.type) {
    case 'CHANG_LANGUAGE': 
      return {...state, lang: action.lang};
    default: 
      return state;
  }
}