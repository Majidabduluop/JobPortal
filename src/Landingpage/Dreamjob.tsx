import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { Avatar } from "@mantine/core";
const Dreamjob = () => {
  return (
    <>
      <div className="absolute left-12 top-44 flex gap-60">
        <div>
          <div>
            <span className="text-white text-4xl font-semibold">
              Find your{" "}
              <span className="text-bright-sun-400">
                dream <br />
                job
              </span>{" "}
              <span className="text-white"></span> with us
            </span>
          </div>
          <div className="mt-3">
            <span className="text-mine-shaft-200 ">
              Good life begins with a good company.Start exploring <br />{" "}
              <span>thousands of jobs in one place</span>
            </span>
          </div>
          <div className="flex gap-4 mt-8 relative">
            <TextInput
              label="Job Title"
              placeholder="Software Engineer"
              className=" rounded-lg [&_input]: !text-mine-shaft-100 [&_input]:!bg-mine-shaft-950"
            />
            <TextInput
              label="Job type"
              placeholder="Full Time"
              className=" rounded-lg [&_input]: !text-mine-shaft-100  [&_input]:!bg-mine-shaft-950"
            />
            <IconSearch
              className="text-white bg-bright-sun-400 w-8 h-7 absolute top-[47%] left-[98%] rounded"
              stroke={2}
            />
          </div>
        </div>

        <div className="relative">
          <img
            src="Boy.png"
            alt="image"
            className="w-[30vw] h-[70vh] object-cover"
          />
          <div className="absolute flex flex-col top-[50%] right-0 border w-[30%] backdrop-blur-lg rounded-lg h-14 items-center justify-center border-bright-sun-400">
            <p className="text-xs text-mine-shaft-200 text-center">
              10k + got job
            </p>
            <Avatar.Group className="flex h-full gap-[0.5%]">
              <Avatar
                src="avatar.png"
                className="h-2 w-6 gap-1 object-contain rounded-lg"
              />
              <Avatar
                src="avator1.png"
                className="h-2 w-6 gap-1 object-contain"
              />
              <Avatar
                src="avatar2.png"
                className="h-2 w-6 gap-1 object-contain"
              />
              <Avatar className="rounded-lg text-mine-shaft-400">+5</Avatar>
            </Avatar.Group>
          </div>
        </div>
        <div className="absolute top-[20%] right-[22%] flex border px-1 border-bright-sun-500 py-3 rounded-lg  backdrop-blur-lg">
          <div className="flex flex-col">
            <div>
              <img
                src="Google.png"
                className="w-[4vw] h-[4vh] object-contain rounded mt-1"
              />
            </div>
            <div>
              <p
                className="text-mine-shaft-300  mt-2"
                style={{ fontSize: "0.500rem" }}
              >
                1 day ago
              </p>
            </div>
          </div>

          <div className="text-xs">
            <div>
              <span className="text-mine-shaft-200">Software Engineer</span>
              <br />
              <span className="text-mine-shaft-400">New York</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dreamjob;
