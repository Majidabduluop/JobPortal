import { Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import ApplyJobComp from "../Applyjob/ApplyJobComp";

const Applyjob = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Divider size="xs" mb="xs" />
      <Link to="/job_des">
        <Button
          color="brightSun.4"
          mb="xs"
          leftSection={<IconArrowLeft size={20} />}
          variant="light"
        >
          Back
        </Button>
      </Link>
      <ApplyJobComp />
    </div>
  );
};
export default Applyjob;
