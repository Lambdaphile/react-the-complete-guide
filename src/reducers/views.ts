export const initialViews = {
  views: [
    { main: true },
    { userFormApp: false },
    { foodOrderApp: false },
    { advancedFoodOrderApp: false }
  ],
  current: 'Main'
}

export const viewReducer = (state = initialViews, action: any) => {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return { ...state, current: }
    default:
      return state
  }
}
