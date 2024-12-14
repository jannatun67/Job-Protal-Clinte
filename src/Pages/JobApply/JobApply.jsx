import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const{user}= UseAuth()
  // console.log(id,user);
  const navigate= useNavigate()

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    // console.log(linkedin, github, resume);
     const jobApplication ={
        job_id:id,
        applicant_email:user?.email,
        linkedin,
         github,
          resume
     }

     fetch('http://localhost:5000/job-applications',{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(jobApplication)
     })
     .then(res=> res.json())
     .then(data=> {
        console.log(data);
        if (data.insertedId) {
            Swal.fire("Added successfully!");
          navigate('/myApplication')
        }
     })
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="card bg-base-100 w-full shadow-2xl">
        <form onSubmit={submitJobApplication} className="card-body">
          <h1 className="md:text-4xl text-2xl text-center font-bold">
            Apply Job and Good Luck
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">LinkedIn URL</span>
            </label>
            <input
              type="url"
              name="linkedin"
              placeholder="LinkedIn URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Github URL</span>
            </label>
            <input
              type="url"
              name="github"
              placeholder="Github URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume URL</span>
            </label>
            <input
              type="url"
              name="resume"
              placeholder="Resume URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
