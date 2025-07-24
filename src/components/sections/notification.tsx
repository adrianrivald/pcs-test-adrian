import { BiAlarm, BiCheck, BiQuestionMark, BiX } from "react-icons/bi";
import {
  useNotificationStore,
  type NotificationData,
} from "../../store/useNotification";
import { GiMedicinePills } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";

const Notification = () => {
  const { notifications, setNotifications } = useNotificationStore();
  const onClickNotification = (notifId: number) => {
    const updated: NotificationData[] = notifications?.map((notification) => {
      if (notification.id === notifId) {
        if (notification.isOpened === false) {
          return {
            ...notification,
            isOpened: true,
          };
        }
      }
      return notification;
    });
    setNotifications(updated);
  };

  const renderNotifIcon = (notifType: string) => {
    switch (notifType) {
      case "Reimbursement":
        return <FaCoins className="text-white text-4xl" />;
      case "Sickness":
        return <GiMedicinePills className="text-white text-4xl" />;
      case "Overtime":
        return <BiAlarm className="text-white text-4xl" />;
      default:
        return <BiQuestionMark className="text-white text-4xl" />;
    }
  };

  const renderStatusIcon = (statusType: string) => {
    switch (statusType) {
      case "success":
        return (
          <div className="bg-green-500 absolute -bottom-1 -right-1 rounded-full text-white p-[2px]">
            <BiCheck />
          </div>
        );
      case "failed":
        return (
          <div className="bg-red-500 absolute -bottom-1 -right-1 rounded-full text-white p-[2px]">
            <BiX />
          </div>
        );
      case "pending":
        return (
          <div className="bg-blue-500 absolute -bottom-1 -right-1 rounded-full text-white p-[2px]">
            <BsArrowRight />
          </div>
        );
    }
  };

  return (
    <div>
      {notifications?.map((notification) => (
        <div
          onClick={() => onClickNotification(notification.id)}
          className={`cursor-pointer transition-all flex justify-between py-4 px-4 md:px-8 ${
            notification.isOpened ? "bg-white" : "bg-blue-100 hover:bg-blue-50"
          }`}
        >
          <div className="flex gap-4">
            {/* Notif icon */}
            <div className="relative w-[70px] h-[70px] flex-none rounded-lg p-1 flex justify-center items-center bg-red-400">
              {renderNotifIcon(notification.type)}
              {renderStatusIcon(notification.status)}
            </div>
            {/* Notif desc */}
            <div className="flex flex-col gap-1">
              <span className="font-bold">{notification.type}</span>
              <span>{notification.description}</span>
            </div>
          </div>
          <div className="flex-none  text-gray-400 text-sm">
            {notification.timeStamp}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
