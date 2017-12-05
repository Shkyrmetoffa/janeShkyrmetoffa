import './main.scss';
import { Aside } from './aside';
import { Content } from './content';
import { StatusMessage } from './status-message';
import { Tabs } from './Tabs';

const tabs = [
  { id: 0, title: 'Tab 1', content: 'Some text is here' },
  { id: 1, title: 'Tab 2', content: 'Another content' },
  { id: 2, title: 'Tab 1', content: 'Third text' }
];

export const Main = () => {
  const text = 'Main';
  return (
    <main className="main" >
      <h1>{text} </h1>
      <div className="content">
        <Aside />
        <Content />
        <Tabs tabs={tabs} selected={0} />
        <StatusMessage text={text} />
        <StatusMessage valid />
      </div>
    </main>
  );
};
