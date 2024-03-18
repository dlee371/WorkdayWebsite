// import { FaTimes } from 'react-icons/fa'

const Job = ({ job, onDelete }) => {
    return (
        <div>
            <p>{job.text}</p>
            <p>{job.day}</p>
        </div>
    )
}

export default Job