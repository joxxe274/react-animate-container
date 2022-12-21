import React from 'react';

// components
import { Navbar } from './components/commons/Navbar.component';
import { MenuProvider } from './context/menu/MenuProvider';
import { WindowProvier } from './context/window/WindowProvider';
import { SideBar } from './components/commons/Sidebar.component';
import { MainRouter } from './router/Main.router';
import { BrowserRouter } from 'react-router-dom';

// styles
import './styles/main.scss';
import * as styles from './styles/app.module.scss';



export const App: React.FC = () => {
  return (
    <WindowProvier>
      <MenuProvider>
        <BrowserRouter >
          <div>
            <Navbar />
            <div className={styles['main-container']}>
              <SideBar />
              <div className={styles['page-router-content']}>
                <MainRouter />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </MenuProvider>
    </WindowProvier>
  )
}