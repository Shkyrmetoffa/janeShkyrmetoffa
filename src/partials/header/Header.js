import './header.scss';
import { Navigation } from '../../components/navigation';


export class Header extends React.Component {
  render() {
    return <header className="header" >
    <Navigation title="name" />
  </header>
  }
}
