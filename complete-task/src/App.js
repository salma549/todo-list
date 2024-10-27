import { useState } from 'react';

const App = () => {
  const [todolist, setTodolist] = useState([]);
  const [newtask, setNewtask] = useState('');

  const handleChange = (event) => {
    setNewtask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: newtask,
      completed: false,
    };

    setTodolist([...todolist, task]);
  };

  const deleteTask = (taskId) => {
    setTodolist(todolist.filter((task) => task.id !== taskId));
  };

  const completeTask = (id) => {
    setTodolist(
      todolist.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <div className="w-full max-w-md px-4 sm:px-6 md:px-8 lg:px-10">
          <input
            type="text"
            className="w-full p-3 mb-4 border border-blue-600 bg-blue-500 text-white rounded-lg"
            placeholder="Enter a new task"
            onChange={handleChange}
            value={newtask}
          />
          <button
            className="w-full p-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        <div className="w-full max-w-md mt-6 px-4 sm:px-6 md:px-8 lg:px-10">
          {todolist.map((task) => (
            <div
              key={task.id}
              className={`flex justify-between items-center p-4 mb-3 rounded-lg shadow ${
                task.completed ? 'bg-green-200' : 'bg-white'
              }`}>
              <h1 className={`${task.completed ? 'text-green-600' : ''}`}>
                {task.taskName}
              </h1>
              <div>
                <button
                  className="px-4 py-2 mr-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  onClick={() => completeTask(task.id)}
                >
                  Complete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;