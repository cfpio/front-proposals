# cfp.io alternative front-end

Alternative front-end for [cfp.io](http://cfp.io)

## Requirements

### Node.js 6.0 

You can install [nvm](https://github.com/creationix/nvm#install-script) to make things easy.
Once nvm is installed, you just have to run `nvm install` in the project root folder to install the expected version of Node.js

Next time you want to contribute to the project, do not forget to run `nvm use` in the project root folder to set the
right version of Node.js for your terminal session.

### Authentication
To communicate with the api hosted at https://api.cfp.io, you first have to create an account at https://auth.cfp.io/. 
Then define a host ending by `.cfp.io` for your localhost (the token cookie is set to cfp.io domain). 
```
127.0.0.1	localhost dev-front.cfp.io
```
And open http://dev-front.cfp.io:3000 to start developing. 

## Install dependencies

```console
$ npm install
```

## Serve app and watch for changes

```console
$ npm start
```

## Build the app for production

```console
$ npm run build
```
