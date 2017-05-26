# cfp.io alternative front-end

Alternative front-end for [cfp.io](http://cfp.io)

## Requirements

### Node.js 7.x 

You can install [nvm](https://github.com/creationix/nvm#install-script) to make things easy.
Once nvm is installed, you just have to run `nvm install` in the project root folder to install the expected version of Node.js

Next time you want to contribute to the project, do not forget to run `nvm use` in the project root folder to set the
right version of Node.js for your terminal session (it is even more simple if you're also a
[`direnv`](https://direnv.net/) user. Check the `.envrc` file).

### Yarn

We use [Yarn](https://yarnpkg.com/) to deal with dependencies resolution.

## Authentication
To communicate with the api hosted at [https://api.cfp.io](https://api.cfp.io/swagger-ui.html), you first have to create an account at
[https://auth.cfp.io/](https://auth.cfp.io/).  

## Available commands

### Install dependencies

```console
$ yarn install
```

### Serve app and watch for changes

```console
$ yarn start
```

### Test the app

```console
$ yarn test # or `yarn test:auto` if you're a TDD person
```

### Build the app for production

```console
$ yarn build
```
