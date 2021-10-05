import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointent',
            day: 'Oct 8th at 10:30am',
            reminder: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Oct 10th at 01:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Oct 6th at 07:30am',
            reminder: false
        }
    ]
)
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App;
  