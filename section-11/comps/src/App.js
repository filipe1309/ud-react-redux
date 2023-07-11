import Accordion from "./components/Accordion";

function App () {
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

  return <Accordion items={items}/>;
}

export default App;
