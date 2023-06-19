import {
  connectDBForTesting,
  disconnectDBForTesting,
} from "../connectDBForTesting";

import { Movie } from "@/models/Movie";

describe("movie model Testing", () => {
  beforeAll(async () => {
    await connectDBForTesting();
  });

  afterAll(async () => {
    await Movie.collection.drop();
    await disconnectDBForTesting();
  });

  test("movie create Test", async () => {
    const movieInput: Object = {
      name: "The Super Mario Bros.",
      year: 2023
    };

    const movieObj = new Movie(movieInput);
    const createdMovie = await movieObj.save();

    expect(createdMovie).toBeDefined();
    expect(createdMovie.name).toBe(movieObj.name);
    expect(createdMovie.year).toBe(movieObj.year);

  });


});
