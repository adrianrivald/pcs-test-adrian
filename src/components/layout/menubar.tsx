import { FaGear } from "react-icons/fa6";
import { GrLogin, GrLogout } from "react-icons/gr";
import { HiCalendar, HiHome } from "react-icons/hi";
import { IoNewspaper } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useWorkingTimeStore } from "../../store/useWorkingTime";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { GiClockwiseRotation } from "react-icons/gi";

dayjs.extend(duration);
const Menubar = () => {
  const { checkInTime, checkOutTime, setCheckInTime, setCheckOutTime, reset } =
    useWorkingTimeStore();

  const location = useLocation();

  const menus = [
    {
      path: "/",
      label: "Home",
      icon: (
        <HiHome
          className={`${
            location.pathname === "/" ? "text-red-500" : "text-gray-400"
          } text-4xl`}
        />
      ),
    },
    {
      path: "/attendance",
      label: "Attendance",
      icon: (
        <HiCalendar
          className={`${
            location.pathname === "/attendance"
              ? "text-red-500"
              : "text-gray-400"
          } text-4xl`}
        />
      ),
    },
    {
      path: "/toggle-time",
      label:
        checkInTime === ""
          ? "Check In"
          : checkOutTime === ""
          ? "Check Out"
          : "Reset",
      icon: (
        <div className="absolute shadow-xl -top-16 w-[120px] h-[120px] bg-red-500 p-4 flex justify-center items-center rounded-full">
          {checkInTime === "" ? (
            <GrLogin className="text-white text-4xl" />
          ) : checkOutTime === "" ? (
            <GrLogout className="text-white text-4xl" />
          ) : (
            <GiClockwiseRotation className="text-white text-4xl" />
          )}
        </div>
      ),
    },
    {
      path: "/form",
      label: "Form",
      icon: (
        <IoNewspaper
          className={`${
            location.pathname === "/attendance"
              ? "text-red-500"
              : "text-gray-400"
          } text-4xl`}
        />
      ),
    },
    {
      path: "/settings",
      label: "Settings",
      icon: (
        <FaGear
          className={`${
            location.pathname === "/attendance"
              ? "text-red-500"
              : "text-gray-400"
          } text-4xl`}
        />
      ),
    },
  ];

  const handleCheckIn = () => {
    setCheckInTime(dayjs().toISOString());
  };

  const handleCheckOut = () => {
    setCheckOutTime(dayjs().toISOString());
  };

  const onClickMenu = (path: string) => {
    if (path === "/toggle-time") {
      if (checkInTime === "") {
        handleCheckIn();
      } else {
        if (checkOutTime === "") {
          handleCheckOut();
        } else {
          reset();
        }
      }
    }
  };

  return (
    <div className="fixed bottom-0 p-8 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] max-w-[768px] mx-auto flex justify-between items-end w-full">
      {/* Menus */}
      {menus?.map((menu) => (
        <div
          onClick={() => onClickMenu(menu.path)}
          className="cursor-pointer flex flex-col gap-2 items-center w-1/5"
        >
          {menu.icon}
          <span
            className={`text-xl ${
              location.pathname === menu.path
                ? "font-bold text-red-500"
                : "font-normal text-gray-400"
            }`}
          >
            {menu.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Menubar;
