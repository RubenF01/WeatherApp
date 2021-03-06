const ProgressBar = ({ completed }) => {
  const percent = completed + "%";

  return (
    <div className="w-full">
      <div className="w-full flex flex-row justify-between text-xs pb-1">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div className="w-full bg-white h-2 rounded">
        <div
          className={`h-full bg-[#FFEC65] rounded`}
          style={{ width: percent }}
        />
      </div>
      <div className="w-full flex flex-row justify-end text-xs pb-5 pt-1">
        <span>%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
