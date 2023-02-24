Grab and run the prepared fakezod. Alternatively, make your own and commit the stuff inside the `desk` folder and `|revive %reconnect-test`.
```
curl https://urbit-foundation.s3.us-east-2.amazonaws.com/zod.zip >> zod.zip
unzip zod
urbit zod
```

You might have to change the port from 80 to 8080 in `src/index.js` if you're on linux.

```
npm install
npm start
```

Open the dev console, try to break it. If you refresh a lot you can do `|suspend %reconnect-test` to clear out the behn timers.
