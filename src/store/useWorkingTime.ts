import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IRegistrationFormStore {
   checkInTime: string;
   checkOutTime: string;
   setCheckInTime: (time: string) => void;
   setCheckOutTime: (time: string) => void;
   reset: () => void;

}

export const useWorkingTimeStore = create<IRegistrationFormStore>()(
    persist(
        (set) => ({
           checkInTime: "",
           checkOutTime: "",
           setCheckInTime: (time: string) => {
            set({
                checkInTime: time
            })
           },
           setCheckOutTime: (time: string) => {
            set({
                checkOutTime: time
            })
           },
           reset: () => {
            set({ checkInTime: "", checkOutTime: ""});
            }
        }),
        {
            name: "working-time-store",
        }
    )
);
