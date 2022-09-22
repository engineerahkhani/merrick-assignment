import React from 'react';
import Box from '../../atoms/Box';

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default MainLayout;
