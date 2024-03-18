import { useState } from 'react'
import Header from './components/Header'

function App() {

  const [setAddJob, setShowAddJob] = useState (false)

  const [jobs, setJobs] = useState([
    {
      id: 1,
      text: "Moving furniture",
      day: "4/20 at 4:20",
      loc: "1234 Asdf Blvd.",
      peeps: 4,
      signUpButton: <button>Sign up</button>
    },
    {
      id: 2,
      text: "Raking leaves",
      day: "4/20 at 4:20",
      loc: "42069 Asdf Blvd.",
      peeps: 4,
      signUpButton: <button>Sign up</button>
    }
  ])

  //Add Job
  const addJob = (job) => {
    // console.log(job);
    const id = Math.floor(Math.random() * 10000) + 1
    const newJob = { id, ...job}
    setJobs([...jobs, newJob])
  }

  //delete job


  return (
    <div>
      <body>
      <div>
      <h1 className='title'>Workday Website</h1>
      <Header name='David' weather='sunny' />
    </div>
    </body>
    </div>
  );
}

export default App;
