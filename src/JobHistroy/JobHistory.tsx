import { Divider, Tabs } from "@mantine/core";
import { useEffect, useState } from "react";
import { jobList } from "../Data/JobsData";
import Card from "../JobHistroy/Card";

const JobHistory = () => {
  return (
    <div>
      <div className="text-2xl font-semibold mb-5">Job History</div>
      <div>
        <Tabs radius="lg" autoContrast variant="outline">
          <Tabs.List className="font-semibold [&_button[data-active='true']]:!border-b-mine-shaft-950 [&_button]:!text-xl sm-mx:[&_button]:!text-lg  xs-mx:[&_button]:!text-base xsm-mx:[&_button]:!text-sm xs-mx:[&_button]:!px-1.5 xs-mx:[&_button]:!py-2 mb-5 [&_button[data-active='true']]:text-bright-sun-400 xs-mx:font-medium">
            <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
            <Tabs.Tab value="SAVED"> Saved</Tabs.Tab>
            <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
            <Tabs.Tab value="INTERVIEWING">Interviewing</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="APPLIED" className="[&>div]:w-full">
            {jobList.map((item: any, index: any) => (
              <Card key={index} {...item} applied />
            ))}
          </Tabs.Panel>
          <Tabs.Panel value="INTERVIEWING" className="[&>div]:w-full">
            {jobList.map((item: any, index: any) => (
              <Card key={index} {...item} interviewing />
            ))}
          </Tabs.Panel>
          <Tabs.Panel value="OFFERED" className="[&>div]:w-full">
            {jobList.map((item: any, index: any) => (
              <Card key={index} {...item} offered />
            ))}
          </Tabs.Panel>
          <Tabs.Panel value="SAVED" className="[&>div]:w-full">
            {jobList.map((item: any, index: any) => (
              <Card key={index} {...item} />
            ))}
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};
export default JobHistory;
