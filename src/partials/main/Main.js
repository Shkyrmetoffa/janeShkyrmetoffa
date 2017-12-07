import { Tabs, TabLink, Tab, TabContent } from 'components/tabs';
import './main.scss';
import { Aside } from './aside';
import { Content } from './content';

// const tabs = [
//   { id: 0, title: 'Tab 1', content: 'Some text is here' },
//   { id: 1, title: 'Tab 2', content: 'Another content' },
//   { id: 2, title: 'Tab 1', content: 'Third text' }
// ];
export const Main = () => (
  <main className="main" >
    <Aside />
    <Content />
    <Tabs>
      <Tab>
        <TabLink title="Tab 1" />
        <TabContent>
          <h3>Tab header 1</h3>
          <p>Some content is here</p>
        </TabContent>
      </Tab>

      <Tab>
        <TabLink title="Tab 2" />
        <TabContent>
          <h3>Tab header 2</h3>
          <p>Some content is here</p>
          <time>{new Date().toLocaleDateString()}</time>
        </TabContent>
      </Tab>
    </Tabs>
  </main>
);
