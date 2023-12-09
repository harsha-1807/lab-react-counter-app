// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import react from "react";
import "./App.css";

class counter extends react.Component {
  count = 0;

  state = {
    count: 0,
  };

  Inc = () => {
    // this.count = this.count +1;
    // console.log("Increase")
    this.setState({ count: this.state.count + 1 });
  };
  Dec = () => {
    // this.count = this.count - 1;
    // console.log(this.count)
    if (this.state.count > 0){
      this.setState({ count: this.state.count - 1 });

    }


  };
  reset =()=>{
    this.setState({ count: 0 });
  }

  
  render() {
    return (
      <>
        <h1>Counter App</h1>
        <h1> {this.state.count} </h1>

        <div className="buttons">
          <button onClick={this.Inc}> + </button>
          <button onClick={this.Dec}> - </button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </>
    );
  }
}

export default counter;
