import React from 'react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      message: 'Congratulations! AI Has Evaluated Your IP And Here Are Your Results.',
      time: 'Just Now',
      link: '#',
    },
    {
      id: 2,
      message: 'IP Experts Has Confirmed The Schedule At 02:20pm Be Ready To Join The Meet',
      time: '12:19 Pm',
      link: '#',
    },
  ];

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-20">
      <div className="py-2 px-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
        <select className="text-sm text-gray-600 border-none focus:ring-0">
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>
      <div className="divide-y divide-gray-200">
        {notifications.map((notification) => (
          <div key={notification.id} className="p-4 hover:bg-gray-50">
            <p className="text-sm text-gray-700 mb-1">{notification.message}</p>
            <div className="flex justify-between items-center">
                <a href={notification.link} className="text-sm text-blue-600 hover:underline">Check Now</a>
                <span className="text-xs text-gray-500">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
