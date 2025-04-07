import { jobList } from "../Data/JobsData";
import JobCard from "../Findjobs/Jobcard";

const ComapnyJobs = () => {
  return (
    <div className="flex mt-10 flex-wrap gap-5">
      {jobList.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};
export default ComapnyJobs;
