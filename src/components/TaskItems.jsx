import React from 'react'

function TaskItem({ title, date, progress, color = "blue" }) {
    const colorMap = {
      blue: "bg-blue-500",
      orange: "bg-orange-500",
      green: "bg-green-500",
    };
  
    return (
      <div className="flex flex-col">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-gray-700">{title}</span>
          <span className="text-gray-400">{date}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className={`h-2 rounded-full ${colorMap[color]}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  }
      
export default TaskItem;
