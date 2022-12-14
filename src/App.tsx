import React from 'react';

type Props = {
  greeting?: string;
};

const Demo: React.FC<Props> = ({ greeting = 'World' }) => {
  return (
    <div>
      <h1>Hello {greeting} - new version</h1>
    </div>
  );
};

export default Demo;
