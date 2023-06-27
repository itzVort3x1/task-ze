import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import express from "express";
import * as routers from "ping.route.ts";
chai.use(chaiHttp);
const apiServer = express();
apiServer.use("/api/v1", routers.pingRouter);
describe("Ping API Test Suite", function () {
	this.timeout(8 * 1000);
	before(async function () {});
	it("should get instance's health status", async function () {
		return chai
			.request(apiServer)
			.get("/api/v1/ping")
			.then(function (res) {
				expect(res.status).to.equal(200);
				expect(res.body.ping).to.equal("pong!");
			});
	});

	it("should return an error for a non-existing route", async function () {
		return chai
			.request(apiServer)
			.get("/api/v1/non-existing-route")
			.then(function (res) {
				expect(res.status).to.equal(404);
				expect(res.body.error).to.equal("Route not found");
			});
	});

	it("should handle internal server errors", async function () {
		// Mocking an internal server error
		const originalRouteHandler = routers.pingRouter.get;
		routers.pingRouter.get = () => {
			throw new Error("Internal Server Error");
		};

		return chai
			.request(apiServer)
			.get("/api/v1/ping")
			.then(function (res) {
				expect(res.status).to.equal(500);
				expect(res.body.error).to.equal("Internal Server Error");

				// Restore the original route handler
				routers.pingRouter.get = originalRouteHandler;
			});
	});
	after(async function () {
		await apiServer.close();
	});
});
