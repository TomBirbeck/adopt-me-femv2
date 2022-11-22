export default function theme(state = 'green', action) {
  switch (action.type) {
    case 'CHANGE_THEME':
      return action.payload;
    default:
      return state;
  }
}
