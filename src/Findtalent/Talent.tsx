import { talents } from "../Data/Talenddata";
import Sort from "../Findjobs/Sort";
import Talentcard from "./Talentcard";

const Talent = () => {
  return (
    <div className="px-1 mt-6 items-center">
      <div className="flex justify-between">
        <div className="text-white text-xl">Recomended jobs</div>
        <Sort />
      </div>
      <div className="mt-12 flex flex-wrap gap-4 justify-between">
        {talents.map((item, index) => (
          <Talentcard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Talent;
