export class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
    clickHandler = () => {
      this.setState(prevState => ({
        counter: prevState.counter + 1
      }));
      console.log(this.state.counter);
    }
    render() {
      return (
        <div className="counter">
          <button onClick={this.clickHandler}>Inc</button>
          <span>{this.state.counter}</span>
        </div>
      );
    }
}
