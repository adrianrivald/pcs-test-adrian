import { BiCoin } from "react-icons/bi";
import {
  useNotificationStore,
  type NotificationData,
} from "../../store/useNotification";

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

  return (
    <div>
      {notifications?.map((notification) => (
        <div
          onClick={() => onClickNotification(notification.id)}
          className={`cursor-pointer transition-all flex justify-between py-4 px-8 ${
            notification.isOpened ? "bg-white" : "bg-blue-100 hover:bg-blue-50"
          }`}
        >
          <div className="flex  gap-4">
            {/* Notif icon */}
            <div className="w-[70px] h-[70px] flex-none rounded-lg p-1 flex justify-center items-center bg-red-300">
              <BiCoin />
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
