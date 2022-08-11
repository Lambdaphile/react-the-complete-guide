export function changeView(name: string) {
  return {
    type: 'CHANGE_VIEW',
    payload: {
      name
    }
  }
}
