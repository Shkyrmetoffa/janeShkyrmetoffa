import './user.scss';

export const User = ({ firstName, lastName, age }) => (
  <div>
    <span>{firstName}</span>
    <span>{lastName}</span>
    <span>{age}</span>
  </div>
);
