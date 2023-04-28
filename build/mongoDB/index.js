"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
(0, mongoose_1.set)("strictQuery", false);
function connectDB() {
    (0, mongoose_1.connect)("mongodb://localhost/NaeCommerce")
        .then(() => console.info("connected to mongoDB"))
        .catch((err) => console.error("mongo error", err.message));
}
exports.default = connectDB;
