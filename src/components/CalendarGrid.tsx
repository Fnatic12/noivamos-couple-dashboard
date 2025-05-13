
import React from 'react';

const months = [
  { name: 'Jan', days: 31 },
  { name: 'Fev', days: 28 },
  { name: 'Mar', days: 31 },
  { name: 'Apr', days: 30 },
  { name: 'May', days: 31 },
  { name: 'Jun', days: 30 },
  { name: 'Jul', days: 31 },
  { name: 'Aug', days: 31 },
  { name: 'Sep', days: 30 },
  { name: 'Oct', days: 31 },
  { name: 'Nov', days: 30 },
  { name: 'Dec', days: 31 },
];

const CalendarGrid: React.FC = () => {
  return (
    <div className="w-full">
      <div className="font-garamond font-bold text-xl mb-2">2025</div>
      <div className="grid grid-cols-4 gap-4 bg-gray-100 p-4 rounded-md">
        {months.map((month) => (
          <div key={month.name} className="flex flex-col">
            <div className="font-garamond font-medium text-lg">{month.name}</div>
            <div className="h-20 bg-gray-300 rounded-md mt-1 shadow-sm"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
