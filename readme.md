# Microfrontend PoC

## Why use Vite.js
https://www.nearform.com/blog/modernise-your-react-development-stack/

## Using
- [React.js](https://reactjs.org/)
- [Vite.js](https://vitejs.dev/)
- [Express](https://expressjs.com/)

## Sharing data between microfrotend
I have chosen to use custom events because it\`s simple to understand and don\`t need a external library.
You just need to remember to remove listeners.
[CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)

A good explanation about this context. https://dev.to/luistak/cross-micro-frontends-communication-30m3

## Structure
- core (Frontend application that manage microfrontends)
- bff  (API that provide existing microfrontends)
- mf-example (Microfront example with React and Vite.js)
- mf-example-2 (Microfront example with React, Vite.js and Typescript)

## Running
```
// start bff
// open new terminal
cd bff
npm start

// start mf-example
// open new terminal
cd mf-example
npm run serve

// start mf-example-2
// open new terminal
cd mf-example-2
npm run serve

// start core
// open new terminal
cd core
npm run dev
```
