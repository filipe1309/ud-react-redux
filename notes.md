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

To Fix console warning:
One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.
```sh
npm install --save-dev @babel/plugin-proposal-private-property-in-object --legacy-peer-deps
```

## Section 6 - How to Handle Forms

https://state-updates.vercel.app/

https://picsum.photos/

## Section 7 - Data Persistence with API Requests

JSON Server:
```sh
npm i json-server
```

```sh
npm run server
```

Rest Client VSCode Extension:
https://marketplace.visualstudio.com/items?itemName=humao.rest-client

```sh
npm i axios
```

### useEffect
https://codepen.io/sgrider/pen/BarEowz


## Section 9 - Deep Dive into Hooks

https://codesandbox.io/s/hungry-fog-0ev1ec

```js
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+ Increment</button>
      <div>Count: {counter}</div>
    </div>
  );
}

export default App;
```

```js
useEffect(() => {
    // this is bad
    document.body.onclick = () => {
        console.log(counter)
    }
}, [counter])
```

```js
useEffect(() => {
    // this is bad
    document.body.onclick = () => {
        console.log(counter)
    }

    // useful for cleanup, it runs before the next effect
    const cleanup = () => {
        document.body.onclick = null
    }

    return cleanup
}, [counter])
```


```js
useEffect(() => {
    const listener = () => {
        console.log(counter)
    }

    document.body.addEventListener('click', listener)

    // useful for cleanup, it runs before the next effect
    return () => {
        document.body.removeEventListener('click', listener)
    }
}, [counter])
```

## Section 10 - Custom Navigation and Routing Systems

```sh
npx create-react-app comps
```

```sh
cd comps
```

```sh
npm install --save-dev @babel/plugin-proposal-private-property-in-object --legacy-peer-deps
```

https://tailwindcss.com/docs/guides/create-react-app

```sh
npm install -D tailwindcss
```

```sh
npx tailwindcss init
```

https://www.npmjs.com/package/classnames

```sh
npm install classnames
```

https://react-icons.github.io/react-icons/

```sh
npm install react-icons
```
