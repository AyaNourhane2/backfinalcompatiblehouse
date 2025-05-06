// models/messageModel.js
import { pool } from '../config/db.js';

export const getMessages = async () => {
  const [rows] = await pool.query('SELECT * FROM messages');
  return rows;
};

export const addMessage = async (message) => {
  const [result] = await pool.query(
    'INSERT INTO messages (sender, recipient, content, timestamp) VALUES (?, ?, ?, ?)',
    [message.sender, message.recipient, message.content, message.timestamp]
  );
  return result;
};