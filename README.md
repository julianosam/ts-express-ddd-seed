# ts-express-ddd-seed

A sample project to experiment with latest frameworks, technologies and conceps like:

* Domain Driver Design (DDD)
* Typescript
* Inversify.js (DI)
* Command Query Responsibility Segregation (CQRS)
* Typeorm

### Installation
Ensure that you have node >=6 and npm >=3 installed on your machine.

Clone the repo, install the dependencies and run the app:

```sh
$ git clone https://julianosam@bitbucket.org/julianosam/ts-express-ddd-seed.git
$ cd ts-express-ddd-seed
$ npm install
$ npm start
```

Run the API console (apidoc):
```sh
$ npm start
$ chrome http://localhost:3000/apidoc
```

Run E2E tests and generate coverage report
```sh
$ npm run test:e2e:coverage
$ open coverage-e2e/lcov-report/index.html
```

Run TSLint
```sh
$ npm run lint
```

Run release task to run all tests and verifications
```sh
$ npm run release
```

### Changelog

- 0.0.1 - Initial code
