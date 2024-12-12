import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";


const HotJobCard = ({job}) => {
    const{_id, title,location,jobType,category,applicationDeadline,description,company_logo,requirements,salaryRange,company}=job;
    return (
        <div className="border border-blue-400 p-4">
           <div className="space-y-3">
           <div className="flex items-center gap-3">
                <img className="w-16" src={company_logo} alt="" />
                <div>
                    <h2 className="text-2xl font-semibold">{company}</h2>
                    <p className="text-gray-400 flex gap-2 items-center"><CiLocationOn /> {location}</p>
                </div>
            </div>
            <h3 className="font-semibold text-2xl">{title}</h3>
            <p className="text-gray-400">{description}</p>
            <div className="grid grid-cols-2 gap-2">
                {
                    requirements.map((Skill,index) => <p className="btn  text-gray-600 bg-blue-200 hover:text-blue-400" key={index}>{Skill}</p>)
                }
            </div>
           
           <div className="flex items-center ">
           <div>
               <p> Salary:$ {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
                </p>
            </div>
            <div>
                <Link to={`/jobs/${_id}`}>
                <button className="btn bg-blue-500 text-white">Apply</button>
                </Link>
            </div>
           </div>
           </div>
        </div>
    );
};

export default HotJobCard;