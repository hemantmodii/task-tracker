import AddTask from "./components/AddTask"
import ToDo from "./components/ToDo";
import { useState } from "react"
function App() {

  const [taskList, setTaskList] = useState([]);

  console.log(taskList);

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
      <div className="">
      <h2 className="ml-6 text-xl font-semibold w-3/4 max-w-lg my-4 py-2 px-4 bg-gray-200">To Do:</h2>
      {taskList.slice(0).reverse().map((task, index)=> 
        <>
        <ToDo key={new Date().getTime()} task={task} taskList={taskList} setTaskList={setTaskList}/>
        </>
      )}
      </div>
    </>
  )
}

export default App
