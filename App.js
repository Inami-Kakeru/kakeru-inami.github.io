import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './src/layouts/MainLayout';
import AppRoutes from './src/routes';
import ErrorBoundary from './src/components/ErrorBoundary';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
