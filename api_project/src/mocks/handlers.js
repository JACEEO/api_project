// src/mocks/handlers.js
import { rest } from "msw";

const todoDummy = [
  {
    id: 1,
    title: "React 5주차 강의 듣기",
  },
  {
    id: 2,
    title: "받아쓰기 숙제 하기",
  },
];

const userDummy = [
  {
    id: "charles",
    pw: "1234",
  },
  {
    id: "jace",
    pw: "3456",
  },
];

export const handlers = [
  rest.post("/login", async (req, res, ctx) => {
    const data = await req.json();
    userDummy.push(data);

    return res(ctx.status(200));
  }),

  rest.get("/login", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userDummy));
  }),
];
