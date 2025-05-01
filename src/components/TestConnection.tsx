import React, { useState, useEffect } from 'react';

export default function TestConnection() {
  const [status, setStatus] = useState('Testing connection...');
  const [error, setError] = useState('');

  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await fetch('/.netlify/functions/test-connection');
        const data = await response.json();
        
        if (response.ok) {
          setStatus('✅ Connection successful!');
        } else {
          setError(data.error || 'Connection failed');
        }
      } catch (err) {
        setError('Failed to connect to the server');
      }
    };

    testConnection();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Connection Test
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md bg-gray-50 p-4">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-900">{status}</p>
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 