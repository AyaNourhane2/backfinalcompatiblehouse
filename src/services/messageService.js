// services/messageService.js
import { getMessages, addMessage } from '../models/messageModel.js';

export const fetchMessages = async () => {
  return await getMessages();
};

export const createMessage = async (message) => {
  return await addMessage(message);
};