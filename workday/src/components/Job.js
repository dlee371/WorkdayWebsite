// import { FaTimes } from 'react-icons/fa'

const Job = ({ job, onDelete }) => {
    return (
        <div className='box' >
            <div className='gift'>
            <p>{job.text}</p>
            <p>{job.day}</p>
            <p>{job.loc}</p>
            <p>Number of bros needed: {job.peeps}</p>
            </div>
        </div>
    )
}

export default Job