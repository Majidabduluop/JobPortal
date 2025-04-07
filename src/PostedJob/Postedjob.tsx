import { Tabs } from "@mantine/core";
import { activeJobs } from "../Data/PostedJob";
import PostedJobCard from "./PostedJobCard";

const PostedJob = () => {
  return (
    <div className="w-1/5">
      <div className="text-2xl font-semibold mb-5">Jobs</div>
      <div>
        <Tabs variant="pills" autoContrast>
          <Tabs.List className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
            <Tabs.Tab value="ACTIVE">Active </Tabs.Tab>
            <Tabs.Tab value="DRAFT">Drafts </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="ACTIVE">
            <div className="flex flex-col gap-4 mt-6">
              {activeJobs.map((item, index) => (
                <div key={index}>
                  <PostedJobCard {...item} />
                </div>
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="DRAFT">D</Tabs.Panel>
        </Tabs>
      </div>
      <div className="flex flex-col flex-wrap mt-5 gap-5"></div>
    </div>
  );
};
export default PostedJob;
