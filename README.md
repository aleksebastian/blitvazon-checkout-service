# BLITVAZON

## Checkout service

> Amazon-style checkout microservice that generates, persists, and displays product data through a REST API. Developed using the MERN stack and styled-components for the front-end styling.

![PageSpeed results](https://raw.githubusercontent.com/aleksebastian/checkout-service/main/pagespeed.svg)

![Site mockup](https://raw.githubusercontent.com/aleksebastian/checkout-service/main/mockup.png)

#### [Check out the live microservice running alongside the photos microservice by clicking here](http://ec2-3-142-94-151.us-east-2.compute.amazonaws.com:3000/)

## Related services

- [Photos](https://github.com/blitva/photos-service) - Alek O. (Myself)
- [Description](https://github.com/blitva/description-service) Amos N.
- [Product features](https://github.com/blitva/product-features-service) - Justin R.
- [Customer questions](https://github.com/blitva/customer-questions-service) - Justin R.
- [Reviews](https://github.com/blitva/reviews-service) - Barsha S.
- [Navbar](https://github.com/blitva/nav-bar) - Justin R.
- [Footer](https://github.com/blitva/footer) - Alek O. (Myself)

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

### Additional Dependencies

- MongoDb Community Edition - [Download](https://docs.mongodb.com/manual/administration/install-community/)

### Setup

Run database seeding script to generate 1000 product ids (MongoDb must be running)

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

Run all of the tests above

```
npm run test:all
```
