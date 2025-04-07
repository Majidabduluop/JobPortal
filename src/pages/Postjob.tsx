import { Divider } from "@mantine/core";
import JObpost from "../Postjob/Jobpost";

const Postjob = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
      <Divider size="xs" mx="md" />
      <JObpost />
    </div>
  );
};
export default Postjob;
