const Agenda = require('agenda');
const moment = require('moment-timezone');
const webPush = require('web-push');
const { DB_HOST } = require('./constants');
const api = require('./db/api');

moment.tz.setDefault('Europe/Warsaw');

const SEND_NOTIFICATIONS_JOB = 'SEND_NOTIFICATIONS_JOB';

const agenda = new Agenda({ db: { address: DB_HOST } });

const sendUserNotification = async (userId, title, notification) => {
  try {
    const subscriptions = await api.getSubscriptions(userId);

    const payload = JSON.stringify({
      title,
      notification: {
        icon: 'https://avatars2.githubusercontent.com/u/25178950?s=200&v=4',
        ...notification
      }
    });

    await Promise.all(
      subscriptions.map(async subscription => {
        try {
          await webPush.sendNotification(subscription.data, payload);
        } catch (e) {
          await api.deleteSubscription(subscription._id);
          throw new Error(`
          webPush.sendNotification error |
          name | ${e.name}
          message | ${e.message}
          statusCode | ${e.statusCode}
          headers | ${JSON.stringify(e.headers)}
          body | ${e.body}
          endpoint | ${e.endpoint}
        `);
        }
      })
    );
  } catch (e) {
    throw new Error(`error sendUserNotification | ${e}`);
  }
};
