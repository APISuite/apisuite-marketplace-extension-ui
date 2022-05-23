export const OPEN_NOTIFICATION = 'Notification/OPEN_NOFICATION';
export function openNotification(notificationType, msg, timer) {
    return { type: OPEN_NOTIFICATION, notificationType, msg, timer };
}
