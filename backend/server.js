const express = require("express");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const orderRoutes = require("./routes/order.route");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 5010;

connectDB();

app.use(express.json());
app.use(logger);
app.use("/api", orderRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
