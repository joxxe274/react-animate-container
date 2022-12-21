import React from "react";

// components
import { PageTemplate } from '../../../templates/Page.template';
import { NavLink } from "react-router-dom";
import { CopyBlock, atomOneDark } from "react-code-blocks";
// styles 
import * as styles from '../../../styles/commonPage.module.scss';

export const GetStarted: React.FC = () => {

  return (
    <PageTemplate>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2>Installation</h2>

          <h4 className="mb-5">npm</h4>
          <div style={{marginBottom: '2rem'}}>
            <CopyBlock
              style={{backgroundColor: 'red'}}
              text={`npm install react-animate-container`}
              language={"bash"}
              theme={atomOneDark}
              wrapLines
              codeBlock
            />
          </div>
          <h4 className="mb-5">yarn</h4>
          <div>
            <CopyBlock
              style={{backgroundColor: 'red'}}
              text={`yarn add react-animate-container`}
              language={"bash"}
              theme={atomOneDark}
              lineNumbers={true}
              wrapLines={true}
              codeBlock
            />
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}