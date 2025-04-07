import { useEffect, useState } from "react";
import { jobList } from "../Data/JobsData";
import JobCard from "../Findjobs/Jobcard";

const Recomendedjob = () => {
  return (
    <div>
      <div className="text-xl font-semibold mb-5">Recommended Job</div>
      <div className="flex bs:flex-col flex-col  flex-wrap gap-5 justify-between bs-mx:justify-start">
        {jobList.map(
          (job: any, index: number) =>
            index < 4 && <JobCard key={index} {...job} />
        )}
      </div>
    </div>
  );
};
export default Recomendedjob;
