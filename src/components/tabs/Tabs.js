import { TabContent, Tab, TabLink, TabNav } from './';

import './tab.scss';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: props.selectedIndex };
  }
  clickTab = (id) => {
    this.setState({ id });
  }
  render() {
    const tabs = this.props.children
      .filter(child => child.type === Tab)
      .reduce((prev, next) => [...prev, ...next.props.children], []);

    const navList = tabs.filter(tab => tab.type === TabLink);
    const tabContents = tabs.filter(tab => tab.type === TabContent);
    return (
      <div className="tabs">
        <TabNav
          activeIndex={this.state.id}
          select={this.clickTab}
        >
          {navList}
        </TabNav>
        {tabContents[this.state.id]}
      </div>
    );
  }
}
