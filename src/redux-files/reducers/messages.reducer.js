import _ from 'lodash';

const initialState = {
  channel: [
    {
      name: 'general',
      from: 'damien',
      at: Date.now(),
      message: 'Channel general. On parler de tout'
    },
    {
      name: 'recrutement',
      from: 'damien',
      at: Date.now(),
      message: 'On recrute!'
    },
  ],
  private: [
    {
      name: 'ornella',
      from: 'ornella',
      at: Date.now(),
      message: 'Bonjour est-ce que ça va?'
    },
    {
      name: 'ornella',
      from: 'damien',
      at: Date.now(),
      message: 'Bonsoir!'
    },
    {
      name: 'damien',
      from: 'damien',
      at: Date.now(),
      message: 'Bonjour test 1'
    },
  ]
}

export default (state = initialState, action) => {
  console.log('reducer messages')
  switch (action.type) {
    case 'GET_MESSAGES':
      return state
    case 'POST_MESSAGE':
      const newState = _.cloneDeep(state);

      newState[action.channelType].push(action.newMessage)
      return newState
    default:
      console.log(3)
      return state;
  }
}