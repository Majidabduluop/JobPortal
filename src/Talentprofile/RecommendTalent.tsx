import { useEffect, useState } from "react";
import Talentcard from "../Findtalent/Talentcard";
import { talents } from "../Data/Talenddata";

const RecommendTalent = () => {
  return (
    <div data-aos="zoom-out">
      <div className="text-xl font-semibold mb-5">Recommended Talent</div>
      <div className="flex flex-col  flex-wrap gap-5 justify-between">
        {talents?.map(
          (talent: any, index: any) =>
            index < 4 && <Talentcard key={index} {...talent} />
        )}
      </div>
    </div>
  );
};
export default RecommendTalent;
