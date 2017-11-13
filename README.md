# ts-express-ddd-seed

A sample nodejs project to experiment with latest frameworks, technologies and conceps like:

* [Domain Driven Design (DDD)](https://en.wikipedia.org/wiki/Domain-driven_design)
* [Typescript](https://www.typescriptlang.org/)
* [Inversify.js (Inversion of control - DI)](http://inversify.io/)
* [Command Query Responsibility Segregation (CQRS)](https://martinfowler.com/bliki/CQRS.html)
* [Typeorm](http://typeorm.io)
* Docker (**wip**)
* APIDocs (**wip**)

### Installation
Ensure that you have node >=6 and npm >=3 installed on your machine.

Clone the repo, install the dependencies and run the app:

```sh
$ git clone https://julianosam@bitbucket.org/julianosam/ts-express-ddd-seed.git
$ cd ts-express-ddd-seed
$ npm install
$ npm start
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
