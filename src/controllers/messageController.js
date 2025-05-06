// controllers/messageController.js
import { fetchMessages, createMessage } from '../services/messageService.js';

export const getMessages = async (req, res) => {
  try {
    const messages = await fetchMessages();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addMessage = async (req, res) => {
  try {
    const message = req.body;
    const result = await createMessage(message);
    res.status(201).json({ id: result.insertId, ...message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};