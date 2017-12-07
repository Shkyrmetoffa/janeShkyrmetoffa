import './navigation.scss';

const nav = [
  { id: 1, name: 'Home' },
  { id: 4, name: 'Dashboard' },
  { id: 6, name: 'Next' }
];
export const Navigation = ({ title, numered }) => {
  const items = nav
    .map(item => <li key={item.id}>{item[title]}</li>);
  return numered
    ? <ol>{items}</ol>
    : <ul>{items}</ul>;
};
