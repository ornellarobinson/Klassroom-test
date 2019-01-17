const initialState = {
  channel: [
    {
      path: '/channels/recrutement',
      icon: 'hashtag',
      online: false,
      name: 'recrutement'
    },
    {
      path: '/channels/general',
      icon: 'hashtag',
      online: false,
      name: 'general'
    }, 
  ],
  private: [
    {
      path: '/private/slackbot',
      icon: 'heart',
      online: true,
      name: 'slackbot'
    }, 
    {
      path: '/private/ornella',
      icon: null,
      online: true,
      name: 'ornella'
    },
    {
      path: '/private/damien',
      icon: null,
      online: false,
      name: 'damien'
    },
  ]
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_CHANNELS':
      return state;
    default:
      return state;
  }
}