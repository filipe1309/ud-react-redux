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

## Section 11 - Mastering the State Design Process

### Events + State Design Process

What state + event handlers are there?
1. List out what a user will do and changes they will see whole using your app
2. Categorize each step as 'state' or 'event handler'
    - State: user sees something on the screen change
    - Event handler: user commited some action
3. Group common steps. Remove duplicates. Rewrite descritpions
What name and type?
4. Look at mockup. Remove or simplify parts that aren't changing
    - Ideally, avoid arrays and objects
5. Replace remaining elements with text descriptions
6. Repeat #4 and #5 with a different variation
7. Imagine you have to write a function that returns the text of steps #5 and #6. In addtion to your component props, what other arguments would you need?
Where's it defined?
8. Decide where each event handler + state will be defined
  - State
    - Should this state be defined in a parent or child component?
    - Better Question
      - Does any component besides the current reasonably need to know about this state?
  - Event handler
    - Should be usually `defined` in same component as state it modifies
    - It might be `used` in a different component

#### Example:

##### Accordion

1. How would a user describe using this app step by step?
> Context: User sees a list of 3 items, and the first item is expanded  

    - User clicks on item #3
    - Item #1 is collapsed
    - Item #3 is expanded
    - User clicks on item #2
    - Item #3 is collapsed
    - Item #2 is expanded

2. Categorize each step as 'state' or 'event handler'
    - User clicks on item #3 -> Event handler
    - Item #1 is collapsed   -> State
    - Item #3 is expanded    -> State
    - User clicks on item #2 -> Event handler
    - Item #3 is collapsed   -> State
    - Item #2 is expanded    -> State

3. Group common steps. Remove duplicates. Rewrite descritpions  
    - 3.1. Group common steps
        - User clicks on item #3 -> Event handler
        - User clicks on item #2 -> Event handler
        - Item #1 is collapsed   -> State
        - Item #3 is expanded    -> State
        - Item #3 is collapsed   -> State
        - Item #2 is expanded    -> State  
   - 3.2. Remove duplicates
        - User clicks on item #3 -> Event handler
        - Item #1 is collapsed   -> State  
    - 3.3. Rewrite descritpions
        - User clicks on a section header                 -> Event handler
        - A section is expanded, all others are collapsed -> State

4. Look at mockup. Remove or simplify parts that aren't changing
    - Remove section title
    - Remove section content

5. Replace remaining elements with text descriptions
    - Replace an expanded section with "Expanded"
    - Replace a collapsed section with "Collapsed"
    - Result:
        - #1 item: Expanded
        - #2 item: Collapsed
        - #3 item: Collapsed

6. Repeat #4 and #5 with a different variation
> Context: User sees a list of 3 items, and the third item is expanded  

    - 4. Look at mockup. Remove or simplify parts that aren't changing
        - Remove section title
        - Remove section content
    - 5. Replace remaining elements with text descriptions
        - Replace an expanded section with "Expanded"
        - Replace a collapsed section with "Collapsed"
        - Result:
            - #1 item: Collapsed
            - #2 item: Collapsed
            - #3 item: Expanded

7. Imagine you have to write a function that returns the text of steps #5 and #6. In addtion to your component props, what other arguments would you need?
```js
const items = [
  {
    id: 1,
    label: "What is React?",
    content: "React is a front end javascript framework, created by Facebook in 2013 and used by companies like Netflix, Airbnb, and Uber."
  },
  {
    id: 2,
    label: "Why use React?",
    content: "React is a favorite JS library among engineers because it is declarative, component-based, and reusable."
  },
  {
    id: 3,
    label: "How do you use React?",
    content: "You use React by creating components and composing them together."
  }
];
```

Imagine we have to define `myFunction`:

```js
// What type would this argument have to be...
function myFunction(items, /* ?? */) {
    // ...
}

// ...to give us these outputs?
myFunction(propsItems, /* ?? */); // ['Expanded', 'Collapsed', 'Collapsed']
myFunction(propsItems, /* ?? */); // ['Collapsed', 'Collapsed', 'Expanded']
```

Solution 1

```js
function myFunction(items, expandedIndex) {
    return items.map((item, index) => {
        if (index === expandedIndex) {
            return 'Expanded';
        }

        return 'Collapsed';
    });
}

myFunction(propsItems, 0); // ['Expanded', 'Collapsed', 'Collapsed']
myFunction(propsItems, 2); // ['Collapsed', 'Collapsed', 'Expanded']
```

Preliminary Design

- User clicks on a section header                 -> Event handler
- A section is expanded, all others are collapsed -> State -> expandedIndex -> number

8. Decide where each event handler + state will be defined
  - Does any component besides Accordion reasonably need to know which item is expanded?
    - Yes: Define in App
    - No: Define in Accordion -> Choosed option
