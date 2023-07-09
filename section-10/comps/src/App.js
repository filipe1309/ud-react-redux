import { GoBell, GoCloud, GoDatabase } from 'react-icons/go';
import Button from './/Button';

function App() {
  return (
    <div>
      <div>
        <Button primary rounded outline>
        <GoBell />
        Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloud />
          Secondary
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoDatabase />
          Success
        </Button>
      </div>
      <div><Button warning>Warning</Button></div>
      <div><Button danger rounded>Danger</Button></div>
    </div>
  );
}

export default App;
