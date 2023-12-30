import React, { useState, useEffect } from 'react';
import axios from 'axios';
const dummyLogHistory = [
    {
      id: 1,
      timestamp: '2023-01-01 12:00:00',
      admin: 'Admin1',
      table: 'Users',
      action: 'Create',
    },
    {
      id: 2,
      timestamp: '2023-01-02 14:30:00',
      admin: 'Admin2',
      table: 'Products',
      action: 'Update',
    },
    {
      id: 3,
      timestamp: '2023-01-03 10:45:00',
      admin: 'Admin3',
      table: 'Orders',
      action: 'Delete',
    },
  ];

const LogHistory = () => {
  const [logHistory, setLogHistory] = useState(dummyLogHistory);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/change-LogHistory');
        setLogHistory(response.data);
      } catch (error) {
        console.error('Error fetching change LogHistory:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-semibold mb-4">Change LogHistory</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Timestamp</th>
              <th className="py-2 px-4 border-b">Admin</th>
              <th className="py-2 px-4 border-b">Table</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {logHistory.map((log) => (
              <tr key={log.id}>
                <td className="py-2 px-4 border-b">{log.timestamp}</td>
                <td className="py-2 px-4 border-b">{log.admin}</td>
                <td className="py-2 px-4 border-b">{log.table}</td>
                <td className="py-2 px-4 border-b">{log.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogHistory;
