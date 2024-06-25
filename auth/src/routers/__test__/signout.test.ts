import request from "supertest";
import { app } from "../../app";
import { getAuthentificationCookie } from "../../test/helpers/signin-helper";

it("clears the cookie after signing out", async () => {
  await getAuthentificationCookie();

  const response = await request(app)
    .post("/api/users/signout")
    .send({})
    .expect(200);
  
  console.log(response.get("Set-Cookie"));
})