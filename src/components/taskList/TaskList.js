import { Tabs, TabLink, Tab, TabContent } from 'components/tabs';

import './taskList.scss';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thir', 'Fri', 'Sat'];
const getDay = () => days[new Date().getDay()];
const dayIndex = () => new Date().getDay();

export const TaskList = () => (
  <div className="tabs-block">
    <Tabs
      selectedIndex={dayIndex()}
    >
      {
      days.map(day => (
        <Tab>
          <TabLink title={day} />
          <TabContent>
            <h3>Tab header 1</h3>
            <p>Some content is here</p>
            <time>{getDay()}</time>
            <button>Add new</button>
          </TabContent>
        </Tab>
      ))
  }
    </Tabs>
  </div>
);
