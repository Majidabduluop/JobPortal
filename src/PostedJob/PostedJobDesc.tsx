import { Badge, Divider, Tabs } from "@mantine/core";
import Job from "../Jobdes/Job";
import { talents } from "../Data/Talenddata";
import Talentcard from "../Findtalent/Talentcard";

const PostedJobDesc = () => {
  return (
    <div data-aos="zoom-out" className=" w-3/4 md-mx:w-full px-5 md-mx:p-0">
      <div className="text-2xl xs-mx:text-xl font-semibold flex items-center ">
        Software Engineer{" "}
        <Badge variant="light" ml="sm" color="brightSun.4" size="sm">
          Badge
        </Badge>
      </div>
      <div className="font-medium xs-mx:text-sm text-mine-shaft-300 mb-5"></div>
      <div className="">
        <Tabs radius="lg" autoContrast variant="outline">
          <Tabs.List className="font-semibold [&_button[data-active='true']]:!border-b-mine-shaft-950 [&_button]:!text-xl sm-mx:[&_button]:!text-lg  xs-mx:[&_button]:!text-base xsm-mx:[&_button]:!text-sm xs-mx:[&_button]:!px-1.5 xs-mx:[&_button]:!py-2 mb-5 [&_button[data-active='true']]:text-bright-sun-400 xs-mx:font-medium">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
            <Tabs.Tab value="offered">Offered</Tabs.Tab>
            <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="overview" className="[&>div]:w-full">
            <Job edit />
          </Tabs.Panel>
          <Tabs.Panel value="applicants">
            <div className="flex mt-10 flex-wrap gap-5 justify-around">
              {talents.map((talent: any, index: any) => (
                <Talentcard key={index} {...talent} posted />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invited">
            <div className="flex mt-10 flex-wrap gap-5 justify-around">
              {talents.map((talent: any, index: any) => (
                <Talentcard key={index} {...talent} invited />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="offered">
            <div className="flex mt-10 flex-wrap gap-5 justify-around"></div>
          </Tabs.Panel>
          <Tabs.Panel value="rejected">
            <div className="flex mt-10 flex-wrap gap-5 justify-around"></div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};
export default PostedJobDesc;
