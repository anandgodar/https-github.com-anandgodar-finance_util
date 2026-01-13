'use client';

import React from 'react';
import AppShell from './components/AppShell';
import { ToolType } from './types';

const App: React.FC = () => {
  return <AppShell initialTool={ToolType.DASHBOARD} />;
};

export default App;
