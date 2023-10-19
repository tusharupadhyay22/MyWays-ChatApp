// ChatBox.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ToDo from './ToDo';
import InProgress from './InProgress';
import Done from './Done';

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [userCount, setUserCount] = useState(0);

  const socket = io('http://localhost:5000');

  useEffect(() => {
    // Listen for user count updates
    socket.on('user count', (count) => {
      setUserCount(count);
    });

    // Listen for new messages
    socket.on('new message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const sendMessage = () => {
    socket.emit('send message', message);
    setMessage('');
  };

  return (
    <div className="chat-box">
      <div>
        <h2>Chat Room</h2>
        <span>Users: {userCount}</span>
      </div>
      <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      <div className="input">
        <input
          type="text"
          placeholder="Write a message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}

        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div className="task-board">
      <ToDo />
      <InProgress />
      <Done />
    </div>
    </div>
  );
};

export default ChatBox;
