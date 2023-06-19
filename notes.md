# Notes

> notes taken during the course

https://codesandbox.io/s/react-pibc94?file=/src/App.js


## Section 1 - Let's Dive In!

```sh
npx create-react-app jsx
```

```sh
cd jsx
```

```sh
npm start
```

## Section 2 - Building Content with JSX

https://babeljs.io/repl
React Runtime: Classic

```html
<h1>Hi theres</h1>
```
    
    ```js
    React.createElement("h1", null, "Hi theres");
    ```

https://jsx-notes.vercel.app/

## Section 3 - Building with Reusable Components

```sh
npx create-react-app pdas
```

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

https://bulma.io/

```sh
npm install bulma
```

## Section 4 - State: How to Change Your App

```sh
npx create-react-app animals
```

```sh
cd animals
```

```sh
npm start
```

https://react.dev/learn/responding-to-events

- Use the state system when you want to update content on the screen
- Calling 'useState' defines a new piece of state
- The first argument to 'useState' is the initial value of the state
- Updating state id done only using the setter function returned from 'useState'
- Calling the setter function will rerender the component

## Section 5 - Using an API with React
    
```sh
npx create-react-app pics
```

https://unsplash.com/developers

https://unsplash.com/documentation#search-photos

```sh
npm install axios
```
