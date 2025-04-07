import { jobList } from "../Data/JobsData";
import Jobcard from "./Jobcard";
import Sort from "./Sort";

const Jobs = () => {
  return (
    <div className="px-1 mt-6 items-center">
      <div className="flex justify-between">
        <div className="text-white text-xl">Recomended jobs</div>
        <Sort />
      </div>
      <div className="mt-12 flex flex-wrap gap-2 items-center justify-center">
        {jobList.map((item, index) => (
          <Jobcard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Jobs;
