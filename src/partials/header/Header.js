import './header.scss';
import { Navigation } from '../../components/navigation';

const nav = [
  { id: 1, name: 'Home' },
  { id: 4, name: 'Dashboard' },
  { id: 6, name: 'Next' }
];
export class Header extends Component{
  render() {
    return (
      <header className="header" >
        <Navigation list={nav} title="name" />
      </header>
    );
  }
}
