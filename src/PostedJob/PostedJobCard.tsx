const PostedJobCard = (props: any) => {
  return (
    <div
      data-aos="fade-up"
      className="rounded-xl p-2 w-52 lg-mx:w-48 bs-mx:w-44 border-l-2 hover:bg-opacity-80 cursor-pointer border-l-bright-sun-400"
    >
      <div className={`text-sm  font-semibold`}>{props.jobTitle}</div>
      <div className="text-xs  font-medium">{props.location}</div>
      <div className="text-xs">{props.posted}</div>
    </div>
  );
};
export default PostedJobCard;
