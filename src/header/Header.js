import './header.scss';
import { Navigation } from '../navigation';

export const Header = () => {
  const text = 'Header';
  return (
    <header className="header" > { text }
      <Navigation />
    </header>
  );
};
