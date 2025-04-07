import { Link } from "react-router-dom";
import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Profile from "../Talentprofile/Profile";
import RecommendTalent from "../Talentprofile/RecommendTalent";
import Job from "../Jobdes/Job";
import Recomendedjob from "../Jobdes/Recomendedjob";

const Jobdescription = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Divider size="xs" />
      <Link className="my-5 inline-block" to="/find-jobs">
        <Button
          color="brightSun.4"
          leftSection={<IconArrowLeft size={20} />}
          variant="light"
        >
          Back
        </Button>
      </Link>
      <div className="flex gap-5 justify-around bs-mx:flex-wrap">
        <Job />
        <Recomendedjob />
      </div>
    </div>
  );
};
export default Jobdescription;
