const initialState = {};

export const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'light':
      return {};
    case 'dark':
      return {};
    default:
      return state;
  }
};
