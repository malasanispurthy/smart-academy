import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import { SplashScreen } from './components/SplashScreen';
import { AIChatBox } from './components/AIChatBox';
import { Role } from './types';

const AppContent: React.FC = () => {
  const { currentUser, currentRole } = useApp();

  if (!currentUser) {
    return <Login />;
  }

  if (currentRole === Role.STUDENT) {
    return <StudentDashboard />;
  }

  if (currentRole === Role.TEACHER) {
    return <TeacherDashboard />;
  }

  return <div>Unknown State</div>;
};

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <AppProvider>
          <AppContent />
          <AIChatBox />
        </AppProvider>
      )}
    </>
  );
};

export default App;