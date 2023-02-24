import Urbit from './Urbit';

Urbit.authenticate({
  ship: 'zod',
  url: 'localhost',
  code: 'lidlut-tabwed-pillex-ridrup',
  verbose: true
}).then(api => {
  console.log(api);
  window.api = api;
  api.subscribe({
    app: 'reconnect-test',
    path: '/every/~s20',
    event: console.log,
    quit: console.log,
    err: console.log
  });
});

window.Urbit = Urbit;
