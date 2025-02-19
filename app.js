const { PORT } = require("./utils/config");
const express = require("express");
const app = express();
const { connect } = require("./utils/db");
const { blogRouter } = require("./routers/blogRouter");
const { userRouter } = require("./routers/userRouter");
const { loginRouter } = require("./routers/loginRouter");
const { errorHandler } = require("./utils/middleware");

app.use(express.json());
app.use("/api/blogs", blogRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use(errorHandler);

const launch = async () => {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (e) {
    console.error("Failed to start server:", e);
  }
};

launch();
