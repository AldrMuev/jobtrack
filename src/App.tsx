import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Login from './components/Login';
import SoftwareShowcase from './components/SoftwareShowcase';
import TestConnection from './components/TestConnection';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // TODO: Implement actual authentication
    console.log('Login attempt with:', email, password);
    // For demo purposes, we'll just set authenticated to true
    setIsAuthenticated(true);
  };

  const handleRegister = () => {
    // TODO: Implement registration flow
    console.log('Navigate to registration');
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <>
                  <Navbar />
                  <main>
                    <Hero />
                    <SoftwareShowcase />
                    <Features />
                    <Pricing />
                    <Testimonials />
                    <FAQ />
                    <Contact />
                    <Newsletter />
                  </main>
                </>
              )
            }
          />
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Login onLogin={handleLogin} onRegister={handleRegister} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-3xl font-bold">Dashboard (Coming Soon)</h1>
                </div>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/test" element={<TestConnection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
