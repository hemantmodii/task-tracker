import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";
import AddTask from "./components/AddTask"
import ToDo from "./components/ToDo";
import { useEffect, useState } from "react"
function App() {

  const [taskList, setTaskList] = useState([]);
  const [completed, setCompleted] = useState([]);
  
  useEffect(() => {
    let array = localStorage.getItem("taskList");

    if(array) {
      setTaskList(JSON.parse(array))
    }
  }, [])

  const [{ isOver }, drop] = useDrop(() => ({
    accept:"todo",
    drop: (item) => addToCompleted(item.id, item.projectName, item.taskDescription, item.timeStamp, item.duration), 
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  }));

  const addToCompleted = (id,projectName, taskDescription, timeStamp, duration) => {
    const moveTask = taskList.filter((task) => id === task.id);
    setCompleted((completed) => [...completed, {moveTask, projectName, taskDescription, timeStamp, duration}])
  }

  return (
    <>
      <h1 className='text-2xl font-bold py-4 pl-6'>
        03- The Task Tracker
      </h1>
      <p className="text-xl pl-6">Hii There!!</p>
      <div className="text-xl pl-6 flex flex-row items-center">
      <p>Click</p>
      <AddTask taskList={taskList} setTaskList={setTaskList}/>
      <p>to add a new task</p>
      </div>
      <div className="flex flex-row ">
      <div className="w-full">
      <h2 className="ml-6 text-xl font-semibold w-3/4 max-w-lg my-4 py-2 px-4 bg-gray-200">To Do:</h2>
      <div className="ml-6 flex flex-col-reverse">
      {taskList.map((task, index)=> 
        <ToDo key={index} task={task} index={index} taskList={taskList} setTaskList={setTaskList}/>
      )}
      </div>
      </div>
      <div className="w-full flex flex-col " ref={drop}>
      <h2 className="text-xl font-semibold w-3/4 max-w-lg my-4 py-2 px-4 bg-gray-200">Completed:</h2>
      {completed.map((task, index)=> 
        <ToDo key={index} task={task} taskList={taskList} setTaskList={setTaskList}/>
      )}
      </div>
      </div>
    </>
  )
}

export default App
