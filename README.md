# cfp.io alternative front-end

Alternative front-end for [cfp.io](http://cfp.io)

## Requirements

### Node.js 6.x 

You can install [nvm](https://github.com/creationix/nvm#install-script) to make things easy.
Once nvm is installed, you just have to run `nvm install` in the project root folder to install the expected version of Node.js

Next time you want to contribute to the project, do not forget to run `nvm use` in the project root folder to set the
right version of Node.js for your terminal session.

### Yarn

We use [Yarn](https://yarnpkg.com/) to deal with dependencies resolution. The last version of Yarn should be good to
start contributing to the project, but if you don't want to take any risk, stick with the `0.17.8`
(version used on CI).

## Authentication
To communicate with the api hosted at [https://api.cfp.io](https://api.cfp.io/swagger-ui.html), you first have to create an account at
[https://auth.cfp.io/](https://auth.cfp.io/).  

## Install dependencies

```console
$ yarn install
```

## Serve app and watch for changes

```console
$ yarn start
```

## Build the app for production

```console
$ yarn build
```
