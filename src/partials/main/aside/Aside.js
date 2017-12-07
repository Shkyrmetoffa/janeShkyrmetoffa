import { Navigation } from 'components/navigation';
import './aside.scss';

const users = [
  { id: 12, name: 'Patrik' },
  { id: 46, name: 'Teresa' },
  { id: 123, name: 'Jhon' }
];
export const Aside = () => {
  const text = 'Aside';
  return (
    <div className="aside-block">
      <h2>{text}</h2>
      <Navigation list={users} title="name" numered />
    </div>
  );
};
