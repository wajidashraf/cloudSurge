import React from 'react';

const EnvCheck: React.FC = () => {
  // Get all environment variables that start with VITE_
  const envVars = Object.keys(import.meta.env)
    .filter(key => key.startsWith('VITE_'))
    .sort()
    .reduce((acc, key) => {
      acc[key] = import.meta.env[key];
      return acc;
    }, {} as Record<string, any>);

  // Helper function to mask sensitive values
  const maskValue = (value: string | undefined): string => {
    if (!value) return 'Not Set';
    if (value.length <= 8) return '***';
    return `${value.substring(0, 3)}...${value.substring(value.length - 3)}`;
  };

  // Check if value looks like a secret/key (contains key, secret, password, token, etc.)
  const isSensitive = (key: string): boolean => {
    const lowerKey = key.toLowerCase();
    return lowerKey.includes('key') || 
           lowerKey.includes('secret') || 
           lowerKey.includes('password') || 
           lowerKey.includes('token') || 
           lowerKey.includes('api_key') ||
           lowerKey.includes('private');
  };

  const mode = import.meta.env.MODE || 'development';
  const dev = import.meta.env.DEV;
  const prod = import.meta.env.PROD;
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Environment Variables Check
          </h1>
          <p className="text-gray-600 mb-8">
            Verify if environment variables are loaded in {mode} mode
          </p>

          {/* Build Info */}
          <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Build Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="font-medium text-gray-700">Mode:</span>
                <span className={`ml-2 px-2 py-1 rounded text-sm font-semibold ${
                  prod ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {mode.toUpperCase()}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Is Development:</span>
                <span className="ml-2 text-gray-900">{dev ? 'Yes' : 'No'}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Is Production:</span>
                <span className="ml-2 text-gray-900">{prod ? 'Yes' : 'No'}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Base URL:</span>
                <span className="ml-2 text-gray-900">{baseUrl || 'Not Set'}</span>
              </div>
            </div>
          </div>

          {/* Environment Variables */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Environment Variables (VITE_*)
            </h2>
            {Object.keys(envVars).length === 0 ? (
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-yellow-800">
                  ⚠️ No environment variables with VITE_ prefix found.
                </p>
                <p className="text-sm text-yellow-700 mt-2">
                  Make sure your environment variables are prefixed with VITE_ to be accessible in the browser.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-r border-gray-300">
                        Variable Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Value
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-l border-gray-300">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {Object.entries(envVars).map(([key, value]) => {
                      const isEmpty = !value || value === '';
                      const shouldMask = isSensitive(key);
                      const displayValue = shouldMask ? maskValue(value) : (value || 'Not Set');
                      
                      return (
                        <tr key={key} className={isEmpty ? 'bg-red-50' : ''}>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-mono font-medium text-gray-900 border-r border-gray-200">
                            {key}
                          </td>
                          <td className="px-4 py-3 text-sm font-mono text-gray-700 break-all">
                            {displayValue}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm border-l border-gray-200">
                            {isEmpty ? (
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                Not Set
                              </span>
                            ) : (
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                ✓ Loaded
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Summary</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Total VITE_ variables found: <strong>{Object.keys(envVars).length}</strong></li>
              <li>Variables set: <strong>{Object.values(envVars).filter(v => v && v !== '').length}</strong></li>
              <li>Variables empty: <strong>{Object.values(envVars).filter(v => !v || v === '').length}</strong></li>
            </ul>
          </div>

          {/* Note */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Sensitive values (keys, secrets, tokens) are masked for security.
              Only environment variables prefixed with <code className="bg-gray-200 px-1 rounded">VITE_</code> are
              accessible in the browser. Server-side variables are not shown here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EnvCheck };

