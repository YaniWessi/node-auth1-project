const express = require("express");

const middlewhare = require("./routers/auth/users/restrictedMiddleWare");

const authRouter = require("./routers/auth/authRouter");
const userRouter = require("./routers/auth/users/usersRouter");

const router = express.Router();

router.use("/auth", authRouter);

router.use("/users", middlewhare, userRouter);

module.exports = router;
