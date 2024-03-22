import { FaTimes } from 'react-icons/fa'




const Job = ({ job, onDelete }) => {
    const date = new Date(job.day);
    
    const f = new Intl.DateTimeFormat("en-us", {dateStyle:'full'}, );
    return (
        <div className='box' >
            <div className='gift' >
                
            <h3>{job.text}{' '} <FaTimes style={{color:"red", cursor:'pointer'}} 
            onClick={() => onDelete(job.id)}/></h3>
            <p>{f.format(date)}</p>
            <p>{job.loc}</p>
            <p># of bros needed: {job.peeps}</p>
            </div>
        </div>
    )
}

export default Job