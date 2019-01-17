export const GET_CHANNELS = 'GET_CHANNELS';
export const POST_CHANNEL = 'POST_CHANNEL';

export function getChannels() {
  return { type: GET_CHANNELS }
}

export function postChanel(newChannel) {
  return { type: POST_CHANNEL, newChannel }
}