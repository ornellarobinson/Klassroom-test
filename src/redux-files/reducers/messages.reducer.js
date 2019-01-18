import _ from 'lodash'

const initialState = {
  channel: [],
  private: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGES':
      return state
    case 'POST_MESSAGE':
      const newState = _.cloneDeep(state)

      newState[action.channelType].push(action.newMessage)
      return newState
    default:
      return state
  }
}