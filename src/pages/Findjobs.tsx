import Jobs from "../Findjobs/Jobs";
import Searchbox from "../Findjobs/Searchbox";
import { Divider } from "@mantine/core";
const Findjobs = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950">
      <Divider size="xs" />
      <Searchbox />
      <Divider size="xs" />
      <Jobs />
    </div>
  );
};
export default Findjobs;
