import React from 'react';
import './Message.css';

function Message({ text, isError }) {
  return (
    <div className="message">
      <p className={`message__text${ isError ? " message__text_type_error" : "" }`}>
        { text }
      </p>
    </div>
  );
}

export default Message;
