const { Router } = require('express');
const router = Router();

router.use((req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401);
    res.send('Unauthorized. Please refresh page to set new session.');
  }
});

const RESPONSE_MOCK = {
  data: [
    { date: '2019-04-01', events: [] },
    { date: '2019-04-02', events: [] },
    { date: '2019-04-03', events: [] },
    { date: '2019-04-04', events: [] },
    { date: '2019-04-05', events: [] },
    {
      date: '2019-04-06',
      events: [
        { title: 'asdasd', id: '5ca8d236b88ea80031689143' },
        { title: '2', id: '5ca8df04253edf003193e41a' }
      ]
    },
    { date: '2019-04-07', events: [] },
    { date: '2019-04-08', events: [] },
    { date: '2019-04-09', events: [] },
    { date: '2019-04-10', events: [] },
    { date: '2019-04-11', events: [] },
    { date: '2019-04-12', events: [] },
    { date: '2019-04-13', events: [] },
    { date: '2019-04-14', events: [] },
    { date: '2019-04-15', events: [] },
    { date: '2019-04-16', events: [] },
    { date: '2019-04-17', events: [] },
    {
      date: '2019-04-18',
      events: [{ title: 'tet', id: '5ca4c3f7b992740031c55154' }]
    },
    { date: '2019-04-19', events: [] },
    { date: '2019-04-20', events: [] },
    { date: '2019-04-21', events: [] },
    { date: '2019-04-22', events: [] },
    { date: '2019-04-23', events: [] },
    { date: '2019-04-24', events: [] },
    { date: '2019-04-25', events: [] },
    { date: '2019-04-26', events: [] },
    { date: '2019-04-27', events: [] },
    { date: '2019-04-28', events: [] },
    { date: '2019-04-29', events: [] },
    { date: '2019-04-30', events: [] },
    { date: '2019-05-01', events: [] },
    { date: '2019-05-02', events: [] },
    { date: '2019-05-03', events: [] },
    { date: '2019-05-04', events: [] },
    { date: '2019-05-05', events: [] },
    { date: '2019-05-06', events: [] },
    { date: '2019-05-07', events: [] },
    { date: '2019-05-08', events: [] },
    {
      date: '2019-05-09',
      events: [{ title: 'asdasda', id: '5ca4c406b992740031c55155' }]
    },
    { date: '2019-05-10', events: [] },
    { date: '2019-05-11', events: [] },
    { date: '2019-05-12', events: [] }
  ]
};

const DAY_RESPONSE = {
  data: [
    {
      id: '5ca8b5d93b35590031c3ed20',
      description: 'asdasd',
      time: '2019-04-06T12:00',
      title: '12323',
      notification: false
    },
    {
      id: '5ca8b97f3b35590031c3ed21',
      description: 'asdasd',
      time: '2019-04-06T12:00',
      title: 'asdasd',
      notification: false
    },
    {
      id: '5ca8cb069487160031a603e7',
      description: 'asdasd',
      time: '2019-04-06T12:00',
      title: 'asdasd',
      notification: false
    },
    {
      id: '5ca8d236b88ea80031689143',
      description: 'asdasd',
      time: '2019-04-06T00:00',
      title: 'asdasd',
      notification: false
    },
    {
      id: '5ca8df04253edf003193e41a',
      description: '2222',
      time: '2019-04-06T00:00',
      title: '2',
      notification: false
    },
    {
      id: '5ca9c0d769afb7003101cd3d',
      description: 'sdfcsdfgardgadfvsdfgadfg',
      time: '2019-04-06T00:00',
      title: 'asdasd',
      notification: false
    }
  ]
};

router.get('/api/calendar', (req, res, next) => {
  console.log(['/api/calendar']);

  res.json(RESPONSE_MOCK);

  res.status(204);
  res.send();
});

router.get('/api/day', (req, res) => {
  console.log(['/api/day']);

  res.json(DAY_RESPONSE);

  res.status(204);
  res.send();
});

router.post('/api/event', (req, res) => {
  console.log(['/api/day'], req.body);

  res.json();

  res.status(200);
  res.send({ id: 1 });
});

router.put('/api/event/:id', (req, res) => {
  console.log(['/api/day'], req.body, req.params);

  res.json();

  res.status(200);
  res.send({ id: 1 });
});

router.delete('/api/event/:id', (req, res) => {
  res.status(200);
  res.send({ id: req.params.id });
});

module.exports = router;
