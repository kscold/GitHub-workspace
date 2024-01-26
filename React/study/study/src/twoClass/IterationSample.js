import React from 'react';

const IterationSample = () => {
  const names = ['눈사람', '얼음'];

  const nameList = names.map((name) => <li>{name}</li>);
  return <div>{nameList}</div>;
};

export default IterationSample;
