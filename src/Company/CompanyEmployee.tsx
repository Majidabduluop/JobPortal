import { talents } from "../Data/Talenddata";
import TalentCard from "../Findtalent/Talentcard";

const CompanyEmployee = () => {
  return (
    <div className="flex mt-10 flex-wrap gap-10">
      {talents.map(
        (talent, index) => index < 6 && <TalentCard key={index} {...talent} />
      )}
    </div>
  );
};
export default CompanyEmployee;
