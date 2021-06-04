# Microfrontend PoC

## Why use Vite.js
https://www.nearform.com/blog/modernise-your-react-development-stack/

## Using
- [React.js](https://reactjs.org/)
- [Vite.js](https://vitejs.dev/)
- [Express](https://expressjs.com/)

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