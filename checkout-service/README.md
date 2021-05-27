# BLITVAZON

## Checkout service

> Item page checkout microservice developed using React and styled-components following SOA principles. Connected via REST API to an express server and persisting data using mongoDB.

## Related services

- [Photos](https://github.com/blitva/photos-service) - Alek O.
- [Description](https://github.com/blitva/description-service) Amos N.
- [Product features](https://github.com/blitva/product-features-service) - Justin R.
- [Customer questions](https://github.com/blitva/customer-questions-service) - Justin R.
- [Reviews](https://github.com/blitva/reviews-service) - Barsha S.
- [Navbar](https://github.com/blitva/nav-bar) - Justin R.
- [Footer](https://github.com/blitva/footer) - Alek O.

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Setup

Run database seeding scripts (requires mongoDB)

```
npm run seed
```

Build bundle

```
npm run build:dev
```

Start server

```
npm run start:dev
```

### Testing

Run API and Database seeding tests

```
npm run test
```

Run React tests

```
npm run test:react
```

Run all of the above tests

```
npm run test:all
```
