import request from "supertest";
import { runServer, server } from "../../app";
import { Result } from "../../types";
import connectDB from "../../mongoDB";
describe("merchant store", () => {
  let url: any;
  beforeAll(async () => {
    connectDB();
    url = await runServer();
  });

  afterAll(async () => {
    await server?.stop();
  });

  it("create merchantStore", async () => {
    const queryData = {
      query: `MerchantStore($name:String) {
        merchantStore(name:$name)
            }`,
      variables: { name: "queze fashion" },
    };
    const response = await request(url).post("/").send(queryData);
    console.log("====================================");
    console.log(response.body);
    console.log("====================================");
    expect(response.body.data?.merchantStore).toBe(Result.Success);
  });
});
