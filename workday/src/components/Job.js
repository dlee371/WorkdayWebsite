import { FaTimes } from 'react-icons/fa'
// import { FaCalendar } from 'react-icons/fa'


const Job = ({ job, onDelete }) => {
    return (
        <div className='box' >
            <div className='gift' >
            <h3>{job.text}{' '} <FaTimes style={{color:"red", cursor:'pointer'}} 
            onClick={() => onDelete(job.id)}/></h3>
            <p>{job.day}</p>
            <p>{job.loc}</p>
            <p>{job.peeps}</p>
            </div>
        </div>
    )
}

export default Job