import React from 'react';

const Stars = ({ length }) => {
  const stars = new Array(length).fill('⭐️');

  return (
    <span>{stars.join('')}</span>
  );
};

export default Stars;
