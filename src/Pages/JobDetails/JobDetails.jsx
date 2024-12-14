import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const {_id,title,company,applicationDeadline} = useLoaderData()
   
    return (
        <div className="w-11/12 mx-auto my-10">
            <h2 className="text-2xl">Job Details for {title}</h2>
            <p>Apply for:{company}</p>
            <p>Deadline:{applicationDeadline}</p>
           <Link to={`/jobApply/${_id}`}>
           <button className="btn btn-primary">Apply Now</button>
           </Link>
        </div>
    );
};

export default JobDetails;