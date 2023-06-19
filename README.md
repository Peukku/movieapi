# Movie API

REST API to find The Most Awesomest Movies

## Description

Search movies, manage 'em too

## Libraries & software used

Built with node v20.3 and TypeScript 5.1, using Express framework. Storing data in MongoDB, testing with Jest.

## How to start

```bash
git clone https://github.com/Peukku/movieapi.git
cd movieapi
npm install 
```

*Configure:*

Set port (default 3000), and mongodb connection info in .env.local

*Load fixtures and start the server*

```bash
npm run load-fixtures
npm run start-dev 
```
(*NOTE*: Loading fixtures clears the Database!)

## What to do

```
# GET all movies:
curl http://127.0.0.1:3000/api/movies -v -X GET

# GET filtered list of movies:
curl http://127.0.0.1:3000/api/movies?q=avengers -v -X GET

# GET details of movie with id
curl http://127.0.0.1:3000/api/movies/648f8ab990b0f007b859b6b1 -v -X GET

# DELETE movie with id 
curl http://127.0.0.1:3000/api/movies/648f8ab990b0f007b859b6b1 -v -X DELETE

# POST new movie;
curl http://127.0.0.1:3000/api/movies -v -d "name=The Super Mario Bros. Movie&year=2023"
```


## Plan

- [X] Project Setup
- [X] Simple Movie model
- [X] Add details to Movie model 
- [X] Add data importer
- [X] GET list of all movies
- [X] GET details of specific movie
- [X] POST new movie
- [X] Add error handling
- [X] DELETE movie
- [X] Simple test case
- [ ] Fix dotenv-flow for test (.env.local ignored)
- [ ] Handle persons (actors, directors) properly
- [ ] PUT / PATCH movie
- [ ] Fix response statuses
- [ ] Add user model
- [ ] Allow POST / PUT / PATCH / DELETE only to authenticated
- [ ] Validate POST / PUT / PATCH parameters
- [ ] Document API (OPENAPI definition)
- [ ] Add pagination, sorting 
- [ ] Add more filtering options (now indexed text search only for name and synopsis)
- [ ] ...

## Improvements for code base
- [ ] Add tests
- [ ] Add eslint
- [ ] Add docker-compose for local Mongo
- [ ] Switch to ORM, Prisma?

