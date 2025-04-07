import {
  Button,
  CheckIcon,
  FileInput,
  LoadingOverlay,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { IconX, IconCheck } from "@tabler/icons-react";
import { Notification, rem } from "@mantine/core";

const ApplicationForm = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setsec] = useState(5);
  const handlePreview = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPreview(!preview);
  };
  const handleSubmit = () => {
    setSubmit(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    let countdown = 5;
    const interval = setInterval(() => {
      setsec((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          navigate("find-jobs");
        }
        return prev - 1;
      });
    }, 1000);
  };
  return (
    <>
      <LoadingOverlay
        className="[&>span]:!fixed [&>span]:top-1/2"
        visible={submit}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "brightSun.4", type: "bars" }}
      />
      <div className="text-xl font-semibold mb-5">Submit Your Application</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:[&>*]:!w-full sm-mx:flex-wrap ">
          <TextInput
            readOnly={preview}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            variant={preview ? "unstyled" : "default"}
            label="Full Name"
            withAsterisk
            placeholder="Enter name"
          />
          <TextInput
            variant={preview ? "unstyled" : "default"}
            readOnly={preview}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            label="Email"
            withAsterisk
            placeholder="Enter email"
          />
        </div>
        <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:[&>*]:!w-full sm-mx:flex-wrap ">
          <NumberInput
            variant={preview ? "unstyled" : "default"}
            readOnly={preview}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            clampBehavior="strict"
            min={0}
            max={9999999999}
            label="Phone Number"
            withAsterisk
            placeholder="Enter  phone"
            hideControls
          />
          <TextInput
            variant={preview ? "unstyled" : "default"}
            readOnly={preview}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            label="Personal Website"
            withAsterisk
            placeholder="Enter url"
          />
        </div>
        <FileInput
          variant={preview ? "unstyled" : "default"}
          readOnly={preview}
          className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
          withAsterisk
          leftSection={<IconPaperclip stroke={1.5} />}
          accept="application/pdf"
          label="Resume/CV"
          placeholder="Attach Resume/CV"
          leftSectionPointerEvents="none"
        />
        <Textarea
          variant={preview ? "unstyled" : "default"}
          readOnly={preview}
          className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
          placeholder="Type something about yourself"
          label="Cover Letter"
          autosize
          minRows={4}
        />
        {!preview && (
          <Button onClick={handlePreview} color="brightSun.4" variant="light">
            Preview
          </Button>
        )}
        {preview && (
          <div className="flex gap-10">
            <Button
              fullWidth
              onClick={handlePreview}
              color="brightSun.4"
              variant="outline"
            >
              Edit
            </Button>
            <Button
              fullWidth
              onClick={handleSubmit}
              color="brightSun.4"
              variant="light"
            >
              Submit
            </Button>
          </div>
        )}
      </div>
      <div
        className={`[&>*]:w-[50vh] fixed top-0 z-[1100] left-[40%] ${
          submit ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <Notification color="brightSun.4" title="All good!" mt="md">
          Submitted Successfully
        </Notification>
      </div>
    </>
  );
};
export default ApplicationForm;
