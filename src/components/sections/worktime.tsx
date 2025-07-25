import { BsArrowClockwise } from "react-icons/bs";
import { LuClock10, LuClock6 } from "react-icons/lu";
import { useWorkingTimeStore } from "../../store/useWorkingTime";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";

dayjs.extend(duration);

const formatDuration = (ms: number) => {
  const dur = dayjs.duration(ms);
  return `${String(dur.hours()).padStart(2, "0")}:${String(
    dur.minutes()
  ).padStart(2, "0")}:${String(dur.seconds()).padStart(2, "0")}`;
};

const WorkTime = () => {
  const { checkInTime, checkOutTime } = useWorkingTimeStore();
  const [liveTime, setLiveTime] = useState("");

  // Start the live time , checkInTime set but checkOutTime not set
  useEffect(() => {
    if (!checkInTime || checkOutTime) return;

    const start = dayjs(checkInTime);
    const interval = setInterval(() => {
      const elapsed = dayjs().diff(start);
      setLiveTime(formatDuration(elapsed));
    }, 1000);

    return () => clearInterval(interval);
  }, [checkInTime, checkOutTime]);

  // Stop the live time , checkInTime and checkOutTime set
  useEffect(() => {
    if (checkInTime === "" && checkOutTime === "") {
      setLiveTime("");
    }
  }, [checkInTime, checkOutTime]);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">Today's Activity</h2>
      {/* Clocks info */}
      <div className="flex justify-between mt-4">
        {/* Check In */}
        <div className="flex flex-col gap-2 items-center justify-center mt-2">
          <LuClock10 className="text-4xl md:text-7xl text-red-600 mx-auto" />
          <span className="font-bold text-lg">
            {checkInTime === "" ? "--:--" : dayjs(checkInTime).format("HH:mm")}
          </span>
          <span>Check in</span>
        </div>

        {/* Working hours */}
        <div className="flex flex-col gap-2 items-center justify-center mt-2">
          <BsArrowClockwise className="text-4xl md:text-7xl text-red-600 mx-auto" />
          <span className="font-bold text-2xl text-red-600">
            {liveTime === "" ? "--:--" : liveTime}
          </span>
          <span>Working Hours</span>
        </div>

        {/* Check Out */}
        <div className="flex flex-col gap-2 items-center justify-center mt-2">
          <LuClock6 className="text-4xl md:text-7xl text-red-600 mx-auto" />
          <span className="font-bold text-lg">
            {checkOutTime === ""
              ? "--:--"
              : dayjs(checkOutTime).format("HH:mm")}
          </span>
          <span>Check Out</span>
        </div>
      </div>
    </div>
  );
};

export default WorkTime;
