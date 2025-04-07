import { Button, Collapse, Divider, Input, RangeSlider } from "@mantine/core";
import React, { useState } from "react";

import { IconUserCircle } from "@tabler/icons-react";

import {
  useDebouncedState,
  useDisclosure,
  useMediaQuery,
} from "@mantine/hooks";
import { searchFields } from "../Data/Talenddata";
import Multiinput from "../Findjobs/Multiinput";

const Search = () => {
  const [value, setValue] = useState<[number, number]>([0, 50]);
  const [name, setName] = useState("");

  return (
    <div>
      <div className="flex px-5 py-8 items-center !text-mine-shaft-100 mt-6">
        <div className="flex">
          <div className="bg-mine-shaft-900 rounded-full  text-bright-sun-400 p-1 mr-2">
            <IconUserCircle />
          </div>
          <Input
            className="[&_input]:!placeholder"
            variant="unstyled"
            placeholder="Talent Name"
          />
          {""}
        </div>

        {searchFields.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div
                key={index}
                className="w-1/5 lg-mx:w-1/4 bs-mx:w-[30%] sm-mx:w-[48%] xs-mx:w-full xs-mx:mb-1  "
              >
                <Multiinput
                  title={item.title}
                  icon={item.icon}
                  options={item.options}
                />
              </div>
              <Divider
                className="sm-mx:hidden"
                mr="xs"
                size="xs"
                orientation="vertical"
              />
            </React.Fragment>
          );
        })}
        <div className="w-1/5 lg-mx:w-1/4 lg-mx:mt-7 bs-mx:w-[30%]  sm-mx:w-[48%] xs-mx:w-full text-sm text-mine-shaft-300 [&_.mantine-Slider-label]:!translate-y-10 xs-mx:mb-1 ">
          <div className="flex mb-1 justify-between">
            <div>Experience (Year)</div>
            <div>
              {value[0]} - {value[1]}{" "}
            </div>
          </div>
          <RangeSlider
            color="brightSun.4"
            size="xs"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
    </div>
  );
};
export default Search;
