import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const {title,company,applicationDeadline} = useLoaderData()
   
    return (
        <div className="w-11/12 mx-auto my-10">
            <h2 className="text-2xl">Job Details for {title}</h2>
            <p>Apply for:{company}</p>
            <p>Deadline:{applicationDeadline}</p>
            <button className="btn btn-primary">Apply Now</button>
        </div>
    );
};

export default JobDetails;