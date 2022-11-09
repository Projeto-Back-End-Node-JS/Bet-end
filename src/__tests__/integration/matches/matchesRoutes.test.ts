import { mockedAdmin } from "./../mocks/index";
import AppDataSource from "../../../data-source";
import { DataSource } from "typeorm";
import request from "supertest";
import app from "../../../app";
import { describe, expect, test } from "@jest/globals";
import { mockedAdminLogin, mockedMatch } from "../mocks";

describe("/matches", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /matches - Must be able to create a match", async () => {
    await request(app).post("/users").send(mockedAdmin);
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);
    const response = await request(app)
      .post("/matches")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedMatch);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("day");
    expect(response.body).toHaveProperty("hour");
    expect(response.body).toHaveProperty("team1");
    expect(response.body).toHaveProperty("team2");
    expect(response.body).toHaveProperty("result");
    expect(response.body).toHaveProperty("score");
    expect(response.body).toHaveProperty("createdAt");

    expect(response.status).toBe(201);
  });
});
