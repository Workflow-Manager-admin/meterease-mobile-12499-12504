import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './ThemeProvider';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ConsumerList from './pages/ConsumerList';
import ConsumerDetail from './pages/ConsumerDetail';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/consumers" element={<ConsumerList />} />
              <Route path="/consumers/:id" element={<ConsumerDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
