import { connect, set } from "mongoose";
set("strictQuery", false);
export default function connectDB() {
  const url = process.env.MONGODB_URL!;
  connect(url)
    .then(() => console.info("connected to mongoDB"))
    .catch((err) => console.error("mongo error", err.message));
}
