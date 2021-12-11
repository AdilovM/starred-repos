import React from 'react';
import Notification from 'bundles/notification-center/components/Notification';

import type {
  Notification as NotificationType,
  UserVerificationNotification as UserVerificationNotificationType,
} from 'bundles/notification-center/types';

import _t from 'i18n!nls/notification-center';

type Props = {
  notification: UserVerificationNotificationType;
  onClick: (notification: NotificationType) => void;
};

const UserVerificationNotification: React.FC<Props> = ({ notification, onClick }) => (
  <Notification onClick={onClick} href="/account-settings" notification={notification}>
    {_t('Verify your account to earn your certificate')}
  </Notification>
);

export default UserVerificationNotification;
