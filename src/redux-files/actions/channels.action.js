export const GET_CHANNELS = 'GET_CHANNELS';
export const POST_CHANNEL = 'POST_CHANNEL';

export function getChannels(channelType) {
  return { type: GET_CHANNELS, channelType }
}

export function postChanel(newChannel) {
  return { type: POST_CHANNEL, newChannel }
}