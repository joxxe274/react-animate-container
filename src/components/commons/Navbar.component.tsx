import React from "react";

import * as styles from '../../styles/navbar.module.scss'
import { getPackage } from '../../services/package';
import { MenuButton } from './MenuButton.component';

export const Navbar: React.FC = () => {
  const [version, setVersion] = React.useState('____');

  React.useEffect(() => {
    const fetchVersion = async () => {
      const response = await getPackage();
      const latest = response['dist-tags']?.latest;
      setVersion(latest);
    }
    fetchVersion();
  }, []);

  return (
      <div className={styles.navbar}>
        <div className={styles['navbar__menu']}>
          <MenuButton />
        </div>
        <div className={styles['navbar__title']}>
          <h1>react-animate-container</h1>
          <span>latest ({version})</span>
        </div>
      </div>
  )
}