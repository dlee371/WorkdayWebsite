import { useState, useEffect } from 'react'
import Header from './components/Header'
import AddJob from './components/AddJob'
import Jobs from './components/Jobs'


function App() {

  const [showAddJob, setShowAddJob] = useState (false)

  const [jobs, setJobs] = useState([])
  
  useEffect(() => {
    const getJobs = async () => {
      const jobsFromServer = await fetchJobs()
      setJobs(jobsFromServer)
    }

    getJobs()
  }, [])

  //fetch jobs
  const fetchJobs = async () => {
    const res = await fetch('http://localhost:1111/jobs')
    const data = await res.json()
    
    return data
  }

  //Add Job
  const addJob = async (job) => {
    const res = await fetch('http://localhost:1111/jobs', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(job)
    })

    const data = await res.json()

    setJobs([...jobs, data])

    // console.log(job);
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newJob = { id, ...job}
    // setJobs([...jobs, newJob])
  }

  //delete job
  const deleteJob = async (id) => {
    await fetch(`http://localhost:1111/jobs/${id}`, {
      method: 'DELETE'
    })

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
