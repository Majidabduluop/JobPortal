import { Avatar, Button, Divider, Text, Modal } from "@mantine/core";
import { useState } from "react";
import { IconCalendarWeek } from "@tabler/icons-react";
import { DateInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { TimeInput } from "@mantine/dates";
import { useRef } from "react";
import {
  IconBookmark,
  IconBookmarkFilled,
  IconClockHour3,
  IconMapPin,
} from "@tabler/icons-react";

import { Link } from "react-router-dom";

const Talentcard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<Date | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div
      data-aos="fade-up"
      className="p-4 rounded-xl bg-mine-shaft-900 mt-1  hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400  transition duration-300 ease-in-out w-[30vw] sm-mx:w-full flex flex-col gap-3"
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar
              className="h-7"
              size="lg"
              src={`/${props.image}.png`}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold ">{props.name}</div>
            <div className="text-sm text-mine-shaft-300">
              <Link className="hover:text-mine-shaft-200" to="/company">
                {props.role}
              </Link>{" "}
              &bull; {props.company}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        {props.topSkills?.map((skills: any, index: any) => (
          <div className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">
            {skills}
          </div>
        ))}
      </div>
      <div>
        <Text
          className="!text-xs text-justify !text-mine-shaft-300"
          lineClamp={3}
        >
          {props.about}
        </Text>
      </div>
      <Divider color="mineShaft.7" size="xs" />

      {props.invited ? (
        <div className="flex text-mine-shaft-200 gap-4">
          <IconCalendarWeek stroke={2} /> Interview: 27 Aug 2024. 10am
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="font-semibold text-mine-shaft-200">
            {props.expectedCtc}
          </div>
          <div className="text-xs flex gap-1 items-center text-mine-shaft-400">
            <IconMapPin className="h-5 w-5" stroke={1.5} />
            {props.location}
          </div>
        </div>
      )}
      <Divider color="mineShaft.7" size="xs" />
      {!props.invited && (
        <>
          <div className="flex [&>*]:w-1/2 [&>*]:p-1">
            <Link to="/talent_profile">
              <Button variant="outline" fullWidth>
                Profile
              </Button>
            </Link>
            <div>
              {props.posted ? (
                <Button
                  onClick={open}
                  rightSection={<IconCalendarWeek stroke={2} />}
                  variant="filled"
                  fullWidth
                  color="brightSun.4"
                >
                  Schedule
                </Button>
              ) : (
                <Button variant="filled" fullWidth color="brightSun.4">
                  Message
                </Button>
              )}
            </div>
          </div>
        </>
      )}
      {props.invited && (
        <>
          <div className="flex gap-4">
            <Button variant="light" fullWidth color="brightSun.4">
              Accept
            </Button>
            <Button variant="filled" fullWidth color="brightSun.4">
              Reject
            </Button>
          </div>
        </>
      )}

      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {" "}
        <div className="flex flex-col gap-4">
          <DateInput
            minDate={new Date()}
            value={value}
            onChange={setValue}
            label="Date"
            placeholder="Enter date"
          />
          <TimeInput
            label="Time"
            ref={ref}
            onClick={() => ref.current?.showPicker()}
          />
          <Button variant="filled" fullWidth color="brightSun.4">
            Shedule
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default Talentcard;
