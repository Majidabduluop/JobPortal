import Search from "../Findtalent/Search";
import { Divider } from "@mantine/core";
import Talent from "../Findtalent/Talent";
const Findtalents = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950">
      <Divider size="xs" />
      <Search />
      <Divider size="xs" />
      <Talent />
    </div>
  );
};
export default Findtalents;
