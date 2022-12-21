import React from "react";

// components
import {
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "../components/pages/Home.page";
import { GetStarted } from '../components/pages/get-started/GetStarted.page';

export const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/getting-started" element={<GetStarted />} />
      <Route path="/test" element={(<div>hola TEST</div>)} />
    </Routes>
  )
};