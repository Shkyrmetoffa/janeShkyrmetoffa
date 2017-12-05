import './aside.scss';
import { Navigation } from '../../navigation/index';

export const Aside = () => {
  const text = 'Aside';
  return (
    <div className="aside-block">
      <h2>{text}</h2>
      <Navigation />
    </div>
  );
};
