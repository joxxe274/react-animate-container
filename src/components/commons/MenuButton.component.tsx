import React from 'react'


import * as styles from '../../styles/menuButotn.module.scss';
import { MenuContext } from '../../context/menu/MenuContext';
import { WindowContext } from '../../context/window/WindowContext';

interface Props {
  size?: number
}

const BARS = 3

export const MenuButton: React.FC<Props> = ({ size = 24 }) => {
  const { isOpen, toggleMenu } = React.useContext(MenuContext);
  const { isMobile } = React.useContext(WindowContext);
  const barsAnimation = [
    styles[`menu-bar-animation--1`],
    styles[`menu-bar-animation--2`],
    styles[`menu-bar-animation--3`],
  ]

  const getBarStyle = (index: number) => {
    return [
      styles['menu-bar'],
      styles[`menu-bar-animation`],
      isOpen ? barsAnimation[index] : ''
    ].join(' ');
  }

  React.useEffect(() => {
    if (isOpen && !isMobile) {
      toggleMenu();
    }
  }, [isMobile, isOpen, toggleMenu]);

  return (
    <div
      style={{ width: size, height: size }}
      className={styles['menu-button-container']}
      onClick={toggleMenu}
    >
      {Array.from(Array(BARS).keys()).map((_, index) => (
        <div key={index} className={getBarStyle(index)}></div>
      ))}
    </div>
  )
}
