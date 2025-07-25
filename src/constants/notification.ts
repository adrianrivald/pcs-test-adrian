import type { NotificationData } from "../store/useNotification";

export const notificationsData : NotificationData[] = [
    {   
        id: 1,
        type: "Reimbursement",
        description: `Your submission "Lorem ipsum dolor sit amet" with a total cost of 50.000 has been paid`,
        isOpened: false,
        timeStamp: "2025-07-25T14:07:21.132+07:00",
        status: "success"
    },
    {
        id: 2,
        type: "Reimbursement",
        description: `Your submission "description" has been rejected, please click for details.`,
        isOpened: true,
        timeStamp: "2025-07-24T10:30:00.000+07:00",
        status: "failed"
    },
    {
        id: 3,
        type: "Sickness",
        description: `Your submission has been approved by the Superior`,
        isOpened: false,
        timeStamp: "2025-07-22T08:15:00.000+07:00",
        status: "success"
    },
    {
        id: 4,
        type: "Overtime",
        description: `Your submission is being reviewed to the Superior`,
        isOpened: false,
        timeStamp: "2025-07-19T12:00:00.000+07:00",
        status: "pending"
    },
    {
        id: 5,
        type: "Sickness",
        description: `Your submission has been rejected by the Superior`,
        isOpened: true,
        timeStamp: "2025-07-18T09:00:00.000+07:00",
        status: "failed"
    },
    {
        id: 6,
        type: "Reimbursement",
        description: `Your submission "Lorem ipsum dolor sit amet" with a total cost of 50.000 has been paid`,
        isOpened: true,
        timeStamp: "2025-05-25T13:00:00.000+07:00",
        status: "success"
    }
]