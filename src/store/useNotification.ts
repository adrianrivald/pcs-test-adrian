import { create } from "zustand";
import { persist } from "zustand/middleware";
import { notificationsData } from "../constants/notification";

export interface NotificationData  {
    id: number;
    type: string;
    description: string;
    isOpened: boolean;
    timeStamp: string;
    status: "success" | "failed" | "pending"
}

interface IRegistrationFormStore {
    notifications: NotificationData[];
    setNotifications: (notification: NotificationData[]) => void;
   isNotificationOpen: boolean;
   setIsNotificationOpen: (isOpen: boolean) => void;

}

export const useNotificationStore = create<IRegistrationFormStore>()(
    persist(
        (set) => ({
            notifications: notificationsData,
           isNotificationOpen: false,
           setNotifications: (updatedNotifications: NotificationData[]) => {
            console.log(updatedNotifications,'updatedNotifications')
            set({
                notifications: updatedNotifications
            })
           },
           setIsNotificationOpen: (isOpen: boolean) => {
            set({
                isNotificationOpen: isOpen
            })
           },
        }),
        {
            name: "notification-store",
        }
    )
);
