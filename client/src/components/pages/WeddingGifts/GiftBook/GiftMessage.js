import React from 'react';
import './GiftBook.scss';

export const GiftMessage = ({ messages }) => {
  return (
    <div className='msg__message'>
      {messages.map((msg) => (
        <div key={msg._id}>
          <p>
            👤 {msg.firstname} {msg.lastname}
          </p>
          <p>🎁 {msg.amount} €</p>
          <p>💌 {msg.message}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
