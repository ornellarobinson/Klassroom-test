export const GET_MESSAGES = 'GET_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';

export function getMessages() {
  return { type: GET_MESSAGES }
}

export function postMessage(channelType, newMessage) {
  return { type: POST_MESSAGE, channelType, newMessage }
}