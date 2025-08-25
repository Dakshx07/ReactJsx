import { atom, selector } from 'recoil';

export const network = atom({
    key: "network",
    default: 102
});
export const notifications = atom({
    key: "notifications",
    default: 12
});
export const jobs = atom({
    key: "jobs",
    default: 0
});
export const messaging = atom({
    key: "messaging",
    default: 0
});

export const totalNotificationsselector=selector({
    key: "totalNotificationsselector",
    get:({get}) => {
        const networkCount = get(network);
        const notificationsCount = get(notifications);
        const jobsCount = get(jobs);
        const messagingCount = get(messaging);
        return networkCount+jobsCount+messagingCount+notificationsCount;
    }
})