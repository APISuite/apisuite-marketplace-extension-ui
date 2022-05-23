import { NotificationType } from './types'

export const OPEN_NOTIFICATION = 'Notification/OPEN_NOFICATION'

export function openNotification(
  notificationType: NotificationType,
  msg: string,
  timer: number
): any {
  return { type: OPEN_NOTIFICATION, notificationType, msg, timer }
}
