import './greeting.scss';

export const Greeting = (props) => {
  const hours = new Date().getHours();
  let text;

  if (hours > 22 && hours <= 3) { text = 'Good night'; }
  if (hours > 3 && hours <= 12) { text = 'Good morning'; }
  if (hours > 12 && hours <= 18) { text = 'Good afternoon'; }
  if (hours > 18 && hours <= 22) { text = 'Good evening'; }

  return (
    <div className="greeting">
      <h2>{text} {props.name || 'Noname'}</h2>
    </div>
  );
};
