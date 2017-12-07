import { Greeting } from './greeting';
import { Numbers } from './numbers';
import { NameList } from './name';

import './content.scss';

export const Content = () => {
  const text = 'Content';
  return (
    <div className="content-block">
      <h2>{text}</h2>
      <Greeting name="Vasya" />
      <Numbers
        from="2"
        to="6"
        odd="3"
      />
      <NameList />
    </div>
  );
};
