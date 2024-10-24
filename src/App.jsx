import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, isNew: true }]);
      setTask('');
      setTimeout(() => {
        setTasks((tasks) =>
          tasks.map((t, i) => (i === tasks.length - 1 ? { ...t, isNew: false } : t))
        );
      }, 500);
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 p-5">
      <h1 className="text-5xl font-bold mb-10 text-white animate-slide-down transition-transform duration-700">
        TO-DO List
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-lg">
        <div className="flex mb-5">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
            placeholder="What needs to be done?"
          />
          <button
            onClick={addTask}
            className="ml-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {tasks.map((item, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-3 rounded-lg shadow-sm transition-all duration-500 ${
                item.isNew ? 'bg-green-300' : 'bg-yellow-200'
              }`}
            >
              <span className="text-gray-800">{item.text}</span>
              <button
                onClick={() => removeTask(index)}
                className="text-red-600 hover:text-red-700 transition-all duration-300"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-gray-500 text-center mt-5">Nothing to do, add some tasks!</p>
        )}
      </div>
    </div>
  );
}

export default App;
