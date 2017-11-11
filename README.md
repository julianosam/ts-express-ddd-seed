# node-ddd-seed

A seed sample project to experiment with DDD, Inverisfy.js, Typeorm and CQRS.

### Installation
Ensure that you have node >=6 and npm >=3 installed on your machine.

Clone the repo, install the dependencies and run the app:

```sh
$ git clone https://julianosam@bitbucket.org/julianosam/node-ddd-seed.git
$ cd node-ddd-seed
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
