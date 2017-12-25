import './numbers.scss';

export const Numbers = ({
  from,
  to,
  odd,
  even
}) => {
  let arr = [];
  for (let i = +from; i <= to; i++) {
    arr.push(i);
  }
  if (odd !== undefined) {
    arr = arr.filter(num => num % 2);
  }
  if (even !== undefined) {
    arr = arr.filter(num => num % 2 === 0);
  }

  return (
    <div className="num-list">
      <ul>
        {
          arr.map((num, index) =>
            <li key={index}>{num}</li>)
        }
      </ul>
    </div>
  );
};
