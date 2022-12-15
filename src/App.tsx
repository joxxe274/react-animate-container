import React from 'react';
import { AnimateContainer } from './AnimateContainer.component';

type Props = {
  greeting?: string;
};

const Demo: React.FC<Props> = ({ greeting = 'World' }) => {
  return (
    <div>
      <AnimateContainer.fadeIn threshold={2}>
        <h1>Hello {greeting}</h1>
      </AnimateContainer.fadeIn>
      <h1>Hello {greeting} - new version</h1>
    </div>
  );
};

export default Demo;
