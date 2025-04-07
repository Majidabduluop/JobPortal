import { Button, Divider, Drawer } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostedJob from "../PostedJob/Postedjob";
import PostedJobDesc from "../PostedJob/PostedJobDesc";

const PostedJobpage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-5  ">
      <Divider />

      <div className="flex gap-5 justify-around py-5">
        <PostedJob />
        <PostedJobDesc />
      </div>
    </div>
  );
};
export default PostedJobpage;
