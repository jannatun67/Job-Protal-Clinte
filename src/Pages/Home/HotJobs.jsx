import { useEffect, useState } from "react";
import HotJobCard from "../../Componentes/HotJobCard/HotJobCard";
import { key } from "localforage";


const HotJobs = () => {
    const [jobs,setJobs]=useState([])
    console.log(jobs);
     useEffect(()=>{
       fetch('http://localhost:5000/jobs')
       .then(res=> res.json())
       .then(data=> setJobs(data))
     },[])
    return (
        <div className="my-10">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4">
                {
                    jobs.map(job =>  <HotJobCard 
                        key={job._id}
                        job={job}
                    ></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;