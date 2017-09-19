class Button extends React.Component {

 handleClick = () => {
	this.props.onClickFunction(this.props.incrementValue)
};
  
	render() {
  	return (
  		<button onClick={this.handleClick}>
      	+{this.props.incrementValue}
      </button>
  	);
  }

}

const Result = (props) => {
	return (
  	<div>{props.counter}</div>
  );
};

class App extends React.Component {
  state = {counter: 0};
  
  incrementCounter = (incrementValue) => {
  	this.setState((prevState) => ({
    		counter: prevState.counter + incrementValue
    }));
  };
  
  resetCounter = () => {
  	this.setState((prevState) => ({
    		counter: 0
    }));
  };
  
  render() {
  	return (
    	<div>
      	<Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />
        <Button incrementValue={'Reset'} onClickFunction={this.resetCounter} />
        <Result counter={this.state.counter} />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);
