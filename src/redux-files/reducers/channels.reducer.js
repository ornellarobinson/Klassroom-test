import _ from 'lodash'

const initialState = {
  channel: [
    {
      path: '/channels/recrutement',
      icon: 'hashtag',
      online: false,
      name: 'recrutement',
      users: '',
    },
    {
      path: '/channels/general',
      icon: 'hashtag',
      online: false,
      name: 'general',
      users: '',
    },
    {
      path: '/channels/sales_fr',
      icon: 'lock',
      online: false,
      name: 'sales_fr',
      users: '',
    },
  ],
  private: [
    {
      path: '/private/slackbot',
      icon: 'heart',
      online: true,
      name: 'slackbot',
    }, 
    {
      path: '/private/ornella',
      icon: null,
      online: true,
      name: 'ornella',
    },
    {
      path: '/private/damien',
      icon: null,
      online: false,
      name: 'damien',
    },
  ]
}

export default (state = {}, action) => {
  switch(action.type) {
    case 'GET_CHANNELS':
      return state;
    case 'POST_CHANNEL':
      const newState = _.cloneDeep(state);
      const checkExistingChannel = newState[action.channelType].filter(channel => channel.name === action.newChannel.name);
      
      if (_.isEmpty(checkExistingChannel))
        newState[action.channelType].push(action.newChannel)
      return newState
    default:
      return state;
  }
}