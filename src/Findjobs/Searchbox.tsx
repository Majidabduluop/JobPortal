import { useState } from "react";
import { RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";
import Multiinput from "./Multiinput";
import { Divider } from "@mantine/core";

const Searchbox = () => {
  const [value, setvalue] = useState<[number, number]>([20, 80]);
  return (
    <div className="flex px-4 py-8 ">
      {dropdownData.map((item, index) => (
        <>
          <div className="w-[18%]" key={index}>
            <Multiinput {...item} />{" "}
          </div>
          <Divider size="xs" className="mr-2" orientation="vertical" />
        </>
      ))}
      <div className="w-1/5 ml-4 [&_.mantine-Slider-label]:translate-y-5">
        <div className="flex justify-between text-sm">
          <div>salary</div>
          <div>
            &#8377;{value[0]} LPA - &#8377;{value[1]} LPA
          </div>
        </div>
        <RangeSlider
          size="xs"
          value={value}
          labelTransitionProps={{
            transition: "skew-down",
            duration: 150,
            timingFunction: "linear",
          }}
          labelAlwaysOn
          onChange={setvalue}
        />
      </div>
    </div>
  );
};
export default Searchbox;
