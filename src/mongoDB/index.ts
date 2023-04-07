import { connect, set } from "mongoose";
set("strictQuery", false);
export default function connectDB() {
  connect("mongodb://localhost/NaeCommerce")
    .then(() => console.info("connected to mongoDB"))
    .catch((err) => console.error("mongo error", err.message));
}