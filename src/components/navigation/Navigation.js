import './navigation.scss';

export const Navigation = ({ list, title, numered }) => {
  const items = list
    .map(item => <li key={item.id}>{item[title]}</li>);
  return numered
    ? <ol>{items}</ol>
    : <ul>{items}</ul>;
};
