import React from 'react';

type Props = {
  greeting?: string;
};

const Demo: React.FC<Props> = ({ greeting = 'World' }) => {
  return (
    <div>
      <h1>Hello {greeting}</h1>
    </div>
  );
};

export default Demo;
