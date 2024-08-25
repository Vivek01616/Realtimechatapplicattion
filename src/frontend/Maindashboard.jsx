import React, { useState, useEffect } from 'react';
import './Maindashboard.css';

const MessengerDashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [conversation, setConversation] = useState([]);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    
    if (selectedUser) {
      setConversation([
        { text: 'Hello!', userId: selectedUser.id },
        { text: 'Hi! How are you?', userId: 1 },
        { text: 'I\'m good, thanks!', userId: selectedUser.id },
      ]);
    }
  }, [selectedUser]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageText !== '') {
      setConversation((prevConversation) => [
        ...prevConversation,
        { text: messageText, userId: selectedUser.id },
      ]);
      setMessageText('');
    }
  };

  return (
    <div className="messenger-dashboard">
      
      <div className="users-list">
        <ul>
            <div>
               <p> Send a message</p>
           </div>
          {users.map((user) => (


































































































































































































































































































































































































































































































































            <li key={user.id} onClick={() => handleUserClick(user)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-window">
        <div className="chat-header">
          <h2>
            {selectedUser ? `Chat with ${selectedUser.name}` : 'Select a user to start chatting'}
          </h2>
        </div>
        <div className="chat-messages">
          {conversation.map((message, index) => (
            <li key={index}>
              <span className="message-text">{message.text}</span>
            </li>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Type a message..."
          />
          <button type="submit" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Bob Smith' },
];

export default MessengerDashboard;