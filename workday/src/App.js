import { useState } from 'react'
import Header from './components/Header'
import AddJob from './components/AddJob'
import Jobs from './components/Jobs'

function App() {

  const [showAddJob, setShowAddJob] = useState (false)

  const [jobs, setJobs] = useState([
    // {
    //   id: 1,
    //   text: "Moving furniture",
    //   day: "4/20 at 4:20",
    //   loc: "1234 Asdf Blvd.",
    //   peeps: 4,
    // },
    // {
    //   id: 2,
    //   text: "Raking leaves",
    //   day: "4/20 at 4:20",
    //   loc: "42069 Asdf Blvd.",
    //   peeps: 4,
    // }
  ])

  //Add Job
  const addJob = (job) => {
    console.log(job)
    // console.log(job);
    const id = Math.floor(Math.random() * 10000) + 1
    const newJob = { id, ...job}
    setJobs([...jobs, newJob])
  }

  //delete job
  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !==id))
  }

  return (
    <div className='container' >
      <h1 className='title'>Workday Website</h1>
      <Header onAdd={() => setShowAddJob(!showAddJob)}
      showAdd={showAddJob} />
      {showAddJob && <AddJob onAdd={addJob} />}
      {jobs.length > 0 ? <Jobs jobs={jobs} onDelete={deleteJob} /> : 'no jobs to show'}
    </div>
  );
}

export default App;
