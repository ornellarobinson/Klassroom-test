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
  },
  {
    id: 3,
    username: 'lola',
    name: 'Lola Dubois',
    online: true
  },
  {
    id: 4,
    username: 'John',
    name: 'John Smith',
    online: false
  },
  {
    id: 5,
    username: 'Jane',
    name: 'Jane Doe',
    online: true
  },
  {
    id: 6,
    username: 'Matthieu',
    name: 'Martin',
    online: true
  },
  {
    id: 7,
    username: 'aliciaK',
    name: 'Alicia Keys',
    online: false
  },
  {
    id: 8,
    username: 'stevie',
    name: 'Stevie',
    online: true
  },
  {
    id: 9,
    username: 'ray',
    name: 'Raymond Carter',
    online: true
  },
  {
    id: 10,
    username: 'bob',
    name: 'bobby smith',
    online: false
  },
  {
    id: 11,
    username: 'wdespres',
    name: 'will despres',
    online: true
  },
]

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_USER_PROFILE':
      return state
    default:
      return state
  }
}