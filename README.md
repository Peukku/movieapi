# Movie API

API to find The Most Awesome Movies

## Description

Search movies, manage 'em too

## How to start

Built with node v20.3.0, requires MongoDB instance 

```bash
git clone <repourl>
cd movieapi
npm install 
npm run load-fixtures
```

*Configure:*
Set port (default 3000), and mongodb connection info in .env.local

*Load fixtures:*
To reset database run:
```bash
npm run load-fixtures
```
(*NOTE*: Clears Database!)

*Start Server:*
```bash
npm run start-dev 
```

## Endpoint to test:

GET all movies:
http://127.0.0.1:3000/api/movies

GET filtered list of movies:
http://127.0.0.1:3000/api/movies?q=lost

POST new movie;
curl http://127.0.0.1:3000/api/movies -v -d "name=The Super Mario Bros. Movie&year=2023"



## Plan

- [X] Project Setup
- [X] Simple Movie model
- [X] Add details to Movie model 
- [X] Add data importer
- [X] GET list of all movies
- [X] GET details of specific movie
- [ ] POST new movie
- [ ] Simple test case
- [ ] PUT / PATCH / DELETE movie
- [ ] Add error handling
- [ ] Fix response statuses
- [ ] Add user model
- [ ] Allow POST / PUT / PATCH / DELETE only to authenticated
- [ ] Validate POST / PUT / PATCH parameters
- [ ] Document API (OPENAPI definition)
- [ ] Add pagination, sorting
- [ ] ...

## Improve code base
- [ ] Add tests
- [ ] Add eslint
- [ ] Add docker-compose for local Mongo
- [ ] Switch to ORM, Prisma?

