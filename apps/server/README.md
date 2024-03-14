# Veet - Server

## Features

- [x] Eslint
- [x] Prettier
- [x] Unit testing
- [x] Logger
- [x] Type-safety for env variables
- [x] Docker
- [x] TypeORM and PostgreSQL
- [ ] OpenAPI Spec (Swagger)
- [ ] Integration testing
- [ ] E2E testing
- [ ] Load testing
- [ ] Continuous Integration
- [ ] Continuous Deployment
- [ ] AWS Integration
- [ ] Monitoring
- [ ] Rate-limiting

## Project structure

```js
+-- src
|   +-- config // application config
|   +-- controllers // controllers for each route with versioning
|   +-- lib // shared logic used in many parts of the app
|   +-- middleware // middlewares to execute logic before to reach the controller
|   +-- models // main application entities
|   +-- routes // express routes with versioning
|   +-- services // logic for connecting with external libraries or services
|   +-- server.ts // express server configuration
|   +-- index.ts // main entrypoint of the app with logic for gracefully shutdown
+-- tests // testing folder
|   +-- e2e // end-to-end tests
|   +-- integration // integration tests for external services
+--
```

# TODO:

- Create schema with TypeORM
- Save documents in postgres
- Delete auth for demo document
