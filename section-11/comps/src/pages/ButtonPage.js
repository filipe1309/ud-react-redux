import { GoBell, GoCloud, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage () {

  const handleClick = () => {
    console.log('clicked');
  }

  const handleMouseEnter = () => {
    console.log('mouse entered');
  }

  return (
    <div>
      <div>
        <Button primary rounded outline onClick={handleClick} className="mb-5" >
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary onMouseEnter={handleMouseEnter} >
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

export default ButtonPage;
