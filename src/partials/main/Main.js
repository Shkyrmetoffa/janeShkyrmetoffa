import { TaskList } from 'components/taskList';

import { Aside } from './aside';
import { Content } from './content';
import { Counter } from './Counter';
// import { Person } from './Person';

import './main.scss';
// const tabs = [
//   { id: 0, title: 'Tab 1', content: 'Some text is here' },
//   { id: 1, title: 'Tab 2', content: 'Another content' },
//   { id: 2, title: 'Tab 1', content: 'Third text' }
// ];
export class Main extends Component {
  render() {
    return (
      <main className="main" >
        <Aside />
        <Counter />
        <Content />
        {/* <Person /> */}
        <TaskList />
        <img src="images/me.jpg" alt="me" />
      </main>
    );
  }
}
