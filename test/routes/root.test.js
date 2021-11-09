"use strict";

const { build } = require("../helper");

describe("root test", () => {
  let app;
  beforeEach(() => {
    app = build();
  });
  afterEach(() => {
    app.close();
  });

  test("default root route", async () => {
    jest
      .useFakeTimers("modern")
      .setSystemTime(new Date("2020-02-08T20:10:21.520Z"));
    const res = await app.inject({
      url: "/",
    });
    expect(JSON.parse(res.payload)).toEqual({ root: true });
  });
});

// inject callback style:
//
// test('default root route', (t) => {
//   t.plan(2)
//   const app = build(t)
//
//   app.inject({
//     url: '/'
//   }, (err, res) => {
//     t.error(err)
//     t.same(JSON.parse(res.payload), { root: true })
//   })
// })
