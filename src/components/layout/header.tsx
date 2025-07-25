import { BiBell } from "react-icons/bi";
import { useNotificationStore } from "../../store/useNotification";
import { FaArrowLeft } from "react-icons/fa6";
import { notificationsData } from "../../constants/notification";
import { useEffect } from "react";

const Header = () => {
  const {
    notifications,
    isNotificationOpen,
    setIsNotificationOpen,
    setNotifications,
  } = useNotificationStore();

  const onClickNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
    window.scroll(0, 0);
  };

  const onClickBack = () => {
    setIsNotificationOpen(false);
    window.scroll(0, 0);
  };

  useEffect(() => {
    // Toggle to reset notification state if notification is closed
    if (isNotificationOpen === false) {
      setNotifications(notificationsData);
    }
  }, [isNotificationOpen]);

  return (
    <div className={`transition-all sticky z-50 top-0`}>
      <div className="p-4 md:p-8 py-8 bg-white shadow-md flex justify-between items-center w-full z-99">
        <div className="flex items-center gap-4 text-xl cursor-pointer">
          {isNotificationOpen && <FaArrowLeft onClick={onClickBack} />}
          <h1 className="font-bold text-red-600 text-2xl">
            {isNotificationOpen ? "Notification" : "KerjaYuk!"}
          </h1>
        </div>
        <div className="relative">
          <BiBell
            onClick={onClickNotification}
            className="text-3xl cursor-pointer"
          />
          {notifications?.some((item) => item.isOpened === false) && (
            <div className="absolute top-0 right-0 bg-red-500 p-1 rounded-full border border-white border-2" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
