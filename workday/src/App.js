import { useState } from 'react'
import Header from './components/Header'
import AddJob from './components/AddJob'
import Jobs from './components/Jobs'


function App() {

  const [showAddJob, setShowAddJob] = useState (false)

  const [jobs, setJobs] = useState([])

  //Add Job
  const addJob = (job) => {
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
    <>
    <div className='container'>
      <h1 className='title'>Workday Website</h1>
      <Header onAdd={() => setShowAddJob(!showAddJob)}
      showAdd={showAddJob} />
      {showAddJob && <AddJob onAdd={addJob} />}
    </div>
    <div className='gift'>
      {jobs.length > 0 ? <Jobs jobs={jobs} onDelete={deleteJob} /> : 'No Jobs To Show'}
    </div>
    </>
  );
}

export default App;
