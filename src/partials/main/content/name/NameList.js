import './nameList.scss';
import { User } from './user';

const users = [{
  firstName: 'Ivan',
  lastName: 'Streltsov',
  age: 11
},
{
  firstName: 'lena',
  lastName: 'Streltsova',
  age: 31
},
{
  firstName: 'Stas',
  lastName: 'Streltsov',
  age: 31
},
];
export const NameList = () => (
  <ul className="name-list">
    {users.map(user => <li><User firstName={user.firstName} lastName={user.lastName} age={user.age} /></li>)}
  </ul>
);
