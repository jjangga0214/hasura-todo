# hasura-todo

Demo of hasura.

[![license](https://img.shields.io/badge/license-MIT-ff4081.svg?style=flat-square&labelColor=black)](./LICENSE)
[![test](https://img.shields.io/badge/test-jest-7c4dff.svg?style=flat-square&labelColor=black)](./jest.config.js)
[![code style:airbnb](https://img.shields.io/badge/code_style-airbnb-448aff.svg?style=flat-square&labelColor=black)](https://github.com/airbnb/javascript)
[![code style:prettier](https://img.shields.io/badge/code_style-prettier-18ffff.svg?style=flat-square&labelColor=black)](https://prettier.io/)
[![.nvmrc](https://img.shields.io/badge/.nvmrc-10-00e676.svg?style=flat-square&labelColor=black)](./.nvmrc)
[![yarn:required](https://img.shields.io/badge/yarn-required-aeea00.svg?style=flat-square&labelColor=black)](https://yarnpkg.com/en/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-ffab00.svg?style=flat-square&labelColor=black)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/Commitizen-cz_conventional_changelog-dd2c00.svg?style=flat-square&labelColor=black)](http://commitizen.github.io/cz-cli/)
[![pr welcome](https://img.shields.io/badge/PRs-welcome-09FF33.svg?style=flat-square&labelColor=black)]()

## Note

Please read [NOTE.md](./NOTE.md), before getting started.

## Getting started

Install dependencies.

```bash
yarn install
```

Copy and edit **.env** file as you want. Note that the server requires **.env** file, as it does not have any "default" values.

```bash
cp .env.example .env
```

Run database and hasura.

```bash
yarn db:up
```

Run the server.

```bash
# on local development environment
yarn dev

# on production environment
yarn start
```

## Yarn scripts

```bash
yarn db:up # runs hasura and postgres
yarn db:down # clears hasura and postgres
yarn db:down:clean # clears hasura and postgres and removes docker volumes

yarn dev # runs server on local development environment
yarn start # runs server on production environment

yarn test # runs all tests (runs `jest` against "*.test.js")
yarn test:unit # runs unit tests
yarn test:integration # runs integration tests # TODO: configure with db
yarn test:coverage # runs all tests and measures coverage
yarn test:unit:coverage # runs unit tests and measures coverage
yarn test:integration:coverage # runs integration tests and measures coverage

yarn lint # lints and formats with eslint, prettier, and markdownlint

yarn release # create a release tag, writes CHANGELOG.md and commit.''

yarn hasura:console # open hasura web console to generate migration files
yarn hasura:pull # pulls migration files from local hasura server
yarn hasura:pull:prod # pulls migration files from production hasura server
yarn hasura:push # pushes(applies) migration files to local hasura server
yarn hasura:push:prod # pushes(applies) migration files to production hasura server
# rolls back a given number of migration(s) on local hasura server
yarn hasura:rollback:count
# rolls back a given number of migration(s) on production hasura server
yarn hasura:rollback:count:prod
# rolls back a specific version of migration on local hasura server
yarn hasura:rollback:version
# rolls back a specific version of migration on production hasura server
yarn hasura:rollback:version:prod
yarn hasura:status # shows migration status from local hasura server
yarn hasura:status:prod # shows migration status from production hasura server
```

### examples for scripts with arguments

```bash
# pulls and creates migration files grouped by name 'init'
hasura:pull 'init'

# rolls back the last 2 migration versions
yarn hasura:rollback:count 2

# rolls back a particular migration version:
yarn hasura:rollback:version 1550925483858
```

## License

[MIT License](./LICENSE). Copyright &copy; 2019, Gil B. Chan <[bnbcmindnpass@gmail.com](mailto:bnbcmindnpass@gmail.com)> ([@jjangga0214](https://github.com/jjangga0214))
