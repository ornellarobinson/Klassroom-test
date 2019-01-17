const initialState = [
  {
    id: 0,
    username: 'orobinson',
    name: 'Ornella Robinson',
    online: true
  },
  {
    id: 1,
    username: 'mduchamp',
    name: 'Mavrick Duchamp',
    online: false
  },
  {
    id: 2,
    username: 'damien',
    name: 'Damien',
    online: true
  }
]

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_USER_PROFILE':
      return state;
    default:
      return state;
  }
}