import { Divider } from "@mantine/core";
// import ApplicationForm from "./ApplicationForm";
import { jobList } from "../Data/JobsData";
import ApplicationForm from "./ApplicationForm";

const ApplyJobComp = () => {
  return (
    <div className="w-2/3 bs-mx:w-4/5 sm-mx:w-full m-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="p-3 bg-mine-shaft-800 rounded-xl flex shrink-0 ">
            <img
              className="h-14  xs-mx:h-10 xs-mx:w-10"
              src={`/Icons/Google.png`}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-2xl  xs-mx:text-xl">Google</div>
            <div className="text-lg text-mine-shaft-300 flex-wrap xs-mx:text-base">
              <span>Google &bull; </span>
              <span> 1 months ago &bull; </span> <span>11 Applicants</span>
            </div>
          </div>
        </div>
      </div>
      <Divider size="xs" my="xl" />
      <ApplicationForm />
    </div>
  );
};
export default ApplyJobComp;
