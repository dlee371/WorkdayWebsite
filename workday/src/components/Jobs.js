import Job from './Job'

const Jobs = ({jobs, onDelete }) => {
    return (
        <>
        {jobs.map((job) => (<Job key={job.id} job={job} onDelete={onDelete}/>))}
        </>
    )
}

export default Jobs
