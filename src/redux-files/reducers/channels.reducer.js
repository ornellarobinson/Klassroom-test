import _ from 'lodash'

const initialState = {
  channel: [],
  private: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_CHANNELS':
      return state
    case 'POST_CHANNEL':
      const newState = _.cloneDeep(state)
      
      let checkExistingChannel = []
      if (!(_.isEmpty(state.private) && _.isEmpty(state.channel)))
        checkExistingChannel = newState[action.channelType].filter(channel => channel.name === action.newChannel.name)
      
      if (_.isEmpty(checkExistingChannel))
        newState[action.channelType].push(action.newChannel)
      return newState
    default:
      return state
  }
}