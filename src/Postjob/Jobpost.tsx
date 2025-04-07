import { fields } from "../Data/Postjob";
import { Divider } from "@mantine/core";
import Selectinput from "./Selectinput";
import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import TextEditor from "./TextEditor";
const JObpost = () => {
  const select = fields;

  return (
    <div data-aos="zoom-out" className="px-16 bs-mx:px-10 md-mx:px-5 py-5 ">
      <div className="text-2xl font-semibold mb-5">Post a Job</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:[&>*]:!w-full sm-mx:flex-wrap">
          <Selectinput {...select[0]} />
          <Selectinput {...select[1]} />
        </div>
        <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:[&>*]:!w-full sm-mx:flex-wrap">
          <Selectinput {...select[2]} />
          <Selectinput {...select[3]} />
        </div>
        <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:[&>*]:!w-full sm-mx:flex-wrap">
          <Selectinput {...select[4]} />
          <Selectinput {...select[5]} />
        </div>
        <TagsInput
          data-aos="zoom-out"
          withAsterisk
          label="Skills"
          placeholder="Enter skill"
          splitChars={[",", " ", "|"]}
          clearable
        />
        <Textarea
          data-aos="zoom-out"
          withAsterisk
          className="my-3"
          label="About Job"
          autosize
          minRows={2}
          placeholder="Enter about job.."
        />
        <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/20">
          <div className="text-sm font-medium ">
            Job Description<span className="text-red-600 "> *</span>
          </div>
          <TextEditor data-aos="zoom-out" />
        </div>
        <div className="flex gap-4">
          <Button data-aos="zoom-out" color="brightSun.4" variant="light">
            Publish Job
          </Button>
          <Button data-aos="zoom-out" color="brightSun.4" variant="outline">
            Save as Draft
          </Button>
        </div>
      </div>
    </div>
  );
};
export default JObpost;
