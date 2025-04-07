import { Link } from "react-router-dom";
import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Profile from "../Talentprofile/Profile";
import RecommendTalent from "../Talentprofile/RecommendTalent";

const Talentprofilepage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 p-4">
      <Divider size="xs" />
      <div>
        <Link className="my-4 inline-block" to="/find-talent">
          <Button
            leftSection={<IconArrowLeft size={20} />}
            color="brightSun.4"
            variant="light"
            fullWidth
          >
            Back
          </Button>
        </Link>
      </div>
      <Divider size="xs" />
      <div className="flex">
        <Profile />
        <RecommendTalent />
      </div>
    </div>
  );
};
export default Talentprofilepage;
