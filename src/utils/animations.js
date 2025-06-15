import React from 'react';

export const animateText = (text) => {
  return text.split(' ').map((word, index) => (
    <span
      key={index}
      className={`animate-text animate-text-delay-${index % 3 + 1}`}
      style={{ display: 'inline-block', marginRight: '0.3em' }}
    >
      {word}
    </span>
  ));
};

export const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={`star ${i < rating ? 'filled' : 'empty'}`}
      style={{
        color: i < rating ? '#D4AF37' : '#ccc',
        marginRight: '2px'
      }}
    >
      ★
    </span>
  ));
}; 