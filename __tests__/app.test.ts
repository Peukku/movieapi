import request from "supertest";

import app from "@/app";

describe("Test app.ts", () => {
    test("GET /", async () => {
        const res = await request(app).get("/");
        expect(res.text).toEqual("Why not try /api/movies ?");
    });
});