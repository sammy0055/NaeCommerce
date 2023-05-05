"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
require("dotenv/config");
const schema_1 = __importDefault(require("./graphql/schema"));
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const mongoDB_1 = __importDefault(require("./mongoDB"));
const verify_access_token_1 = require("./services/authentication/verify-access-token");
exports.server = new server_1.ApolloServer({ typeDefs: schema_1.default, resolvers: resolvers_1.default });
const runServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const { url } = yield (0, standalone_1.startStandaloneServer)(exports.server, {
        context: ({ req }) => __awaiter(void 0, void 0, void 0, function* () {
            return ({
                token: () => __awaiter(void 0, void 0, void 0, function* () {
                    const token = req.headers.authorization || "";
                    const payload = yield (0, verify_access_token_1.verifyAccessToken)(token);
                    return payload;
                }),
            });
        }),
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at ${url}`);
});
(0, mongoDB_1.default)();
runServer();
