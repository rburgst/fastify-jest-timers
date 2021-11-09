# Fastify Hangs with Jest Sample repo

Sample repo demostrating a problem with fastify and using `jest.useFakeTimers` causing a hang.

To replicate:

* `npm install`
* `npm run test`

=> test hangs and fails with timeout.

Comment out 
```javascript
// test/routes/root.test.js

    // jest
    //   .useFakeTimers("modern")
    //   .setSystemTime(new Date("2020-02-08T20:10:21.520Z"));

´
to make it work.