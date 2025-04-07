import { Link, useLocation } from "react-router-dom";
const Navlinks = () => {
  const Links = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Post Jobs", url: "Post-jobs" },
    { name: "posted-job", url: "Posted-Job" },
    { name: "Job-Histroy", url: "Job-history" },
  ];
  const location = useLocation();
  return (
    <div className="flex gap-4 text-mine-shaft-300 h-full items-center">
      {Links.map((item, index) => (
        <div
          className={`${
            location.pathname == "/" + item.url
              ? "border-bright-sun-400 text-bright-sun-400 hover:bright-sun-400"
              : "border-transparent"
          }`}
        >
          <Link className="" to={item.url}>
            {item.name}
          </Link>{" "}
        </div>
      ))}
    </div>
  );
};

export default Navlinks;
