import Job from './Job'

const Jobs = ({jobs, onDelete }) => {
    return (
        <>
        {jobs.map((job, index) => (<Job key={index} job={job} onDelete={onDelete}/>))}
        </>
    )
}

export default Jobs
