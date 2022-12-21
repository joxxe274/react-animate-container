import React from "react";

import { MenuContext } from '../../context/menu/MenuContext';
import { NavLink } from 'react-router-dom';
// styles
import * as styles from '../../styles/sidebar.module.scss';
import { LINKS } from '../../utils/consts';


interface LinkProps {
  isActive: boolean;
}

export const SideBar: React.FC = () => {
  const { isOpen, toggleMenu } = React.useContext(MenuContext);

  const getActiveLink = (params: LinkProps) => {
    const { isActive } = params;
    if (isActive) {
      return styles['active'];
    }
    return '';
  }

  const containerStyles = [
    styles['side-bar'],
    isOpen ? styles['side-bar__open'] : '',
  ].join(' ');

  return (
    <div className={containerStyles}>
      <div className={styles['side-bar__content']}>
        {LINKS.map((link, index) => (
          <NavLink 
            key={index} 
            end
            onClick={toggleMenu}
            className={getActiveLink} 
            to={link.path}>
              &bull; {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  )
};