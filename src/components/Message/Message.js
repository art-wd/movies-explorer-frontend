import React from 'react';
import './Message.css';

function Message({ message }) {
  return (
    <div className="message">
      <p className={`message__text${ message.isError ? " message__text_type_error" : "" }`}>
        { message.text }
      </p>
    </div>
  );
}

export default Message;
