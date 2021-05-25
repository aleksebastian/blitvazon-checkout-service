# BLITVAZON

## Checkout service

> Item page checkout microservice developed using React and styled-components following SOA principles. Connected via REST API to an express server and persisting data using mongoDB.

## Related services

- [Photos](https://github.com/blitva/photos-service)
- [Description](https://github.com/blitva/description-service)
- [Product features](https://github.com/blitva/product-features-service)
- [Customer questions](https://github.com/blitva/customer-questions-service)
- [Comparison](https://github.com/blitva/comparison-service)
- [Reviews](https://github.com/blitva/reviews-service)
- [Navbar](https://github.com/blitva/nav-bar)
- [Footer](https://github.com/blitva/footer)

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
