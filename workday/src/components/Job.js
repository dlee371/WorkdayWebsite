// import { FaTimes } from 'react-icons/fa'

const Job = ({ job, onDelete }) => {
    return (
        <div>
            <p>{job.text}</p>
            <p>{job.day}</p>
            <p>{job.loc}</p>
            <p>{job.peeps}</p>
        </div>
    )
}

export default Job