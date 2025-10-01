import mongoose from "mongoose";
import server from "../server.js";
import dotenv from "dotenv";
import { use, expect } from "chai";
import chaiHttp from "chai-http";
const chai = use(chaiHttp);
dotenv.config();

describe("Express App Tests", () => {
  before(async () => {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
  });

  after(async () => {
    await mongoose.connection.close();
  });
  describe("GET /products", () => {
    it("should return a list of products", (done) => {
      chai.request
        .execute(server)
        .get("/api/products")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          expect(res.body.length).to.be.greaterThan(0);
          done();
        });
    });
  });
});
