import Button from './/Button';

function App() {
  return (
    <div>
      <div><Button primary rounded outline>Primary</Button></div>
      <div><Button secondary>Secondary</Button></div>
      <div><Button success outline>Success</Button></div>
      <div><Button warning>Warning</Button></div>
      <div><Button danger rounded>Danger</Button></div>
    </div>
  );
}

export default App;
