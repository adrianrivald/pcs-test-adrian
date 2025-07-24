import type { NotificationData } from "../store/useNotification";

export const notificationsData : NotificationData[] = [
    {   
        id: 1,
        type: "Reimbursement",
        description: `Your submission "Lorem ipsum dolor sit amet" with a total cost of 50.000 has been paid`,
        isOpened: false,
        timeStamp: "2020-10-06",
        status: "success"
    },
    {
        id: 2,
        type: "Reimbursement",
        description: `Your submission "description" has been rejected, please click for details.`,
        isOpened: true,
        timeStamp: "2020-10-06",
        status: "failed"
    },
    {
        id: 3,
        type: "Sickness",
        description: `Your submission has been approved by the Superior`,
        isOpened: false,
        timeStamp: "2020-10-06",
        status: "success"
    },
    {
        id: 4,
        type: "Overtime",
        description: `Your submission is being reviewed to the Superior`,
        isOpened: false,
        timeStamp: "2020-10-06",
        status: "pending"
    }
]