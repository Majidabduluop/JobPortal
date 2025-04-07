import { IconAnchor } from "@tabler/icons-react";
import { IconSettings } from "@tabler/icons-react";
import { IconBell } from "@tabler/icons-react";
import { Avatar } from "@mantine/core";
import Navlinks from "./Navlinks";
import { useLocation } from "react-router-dom";
import Profilemenu from "./Profilemenu";
import { useSelector } from "react-redux";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const user = useSelector((state: any) => state.user);
  return location.pathname != "/Sign-up" && location.pathname != "/Login" ? (
    <div className="w-full h-20  bg-mine-shaft-950 text-white flex justify-between p-6">
      <div className="flex gap-1 text-bright-sun-400">
        <IconAnchor stroke={2.5} className="h-8 w-8 " />
        <div className="text-2xl font-semibold">JobHook</div>
      </div>
      <div className="flex gap-3">
        <Navlinks />
      </div>
      <div className="flex gap-10">
        {user ? (
          <Profilemenu />
        ) : (
          <Link to="/Login">
            <Button variant="subtle" color="brightsun.4">
              Login
            </Button>
          </Link>
        )}
        {/* <div className="bg-mine-shaft-700 rounded-full h-[4.5vh] w-[5vh] items-center">
          <IconSettings className="size-6" stroke={1} />
        </div> */}
        <div className="mt-1">
          <IconBell stroke={2} />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Header;
