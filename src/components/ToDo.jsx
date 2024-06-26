import React from 'react'
import EditTask from './EditTask'

const ToDo = ({task, index, taskList, setTaskList }) => {

  const handleDelete = (itemID) => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);

    setTaskList(
      (currentTasks => currentTasks.filter(todo => todo.id != itemID))
    );

  }

  return (
    <>
      <div
        className="flex flex-col items-start justify-start bg-gray-100 border my-4 ml-6 py-4 px-6 w-3/4 max-w-lg rounded-lg shadow-md">
        <div className="w-full flex flex-row justify-between">
        <p className="text-xl font-semibold">{task.projectName}</p>
        <EditTask task={task}
        index={index}
        taskList={taskList}
        setTaskList={setTaskList}
        />
        </div>
        <p className="text-lg py-2">{task.taskDescription}</p>
        <div className='w-full flex justify-center '>
        <button 
      className='bg-red-500 uppercase font-semibold text-sm text-white py-2 px-4 mt-8 rounded-lg mb-1'
      onClick={handleDelete}
      >
        Delete
      </button>
        </div>
        </div>
    </>
  )
}

export default ToDo