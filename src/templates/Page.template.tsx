import React from "react";

// components
import { AnimateContainer } from 'react-animate-container';

// styles
import * as styles from '../styles/pageTemplate.module.scss';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const PageTemplate: React.FC<Props> = ({ children }) => {
  return (
    <AnimateContainer.fadeInLeft 
      className={styles['page-template']}
      manualActive={true}
      active={true}
      delay={0.1}
      setOpacityNone={true}
      setOpacityNoneAfter={false}
      duration={0.3}>
      {children}
    </AnimateContainer.fadeInLeft>
  )
}