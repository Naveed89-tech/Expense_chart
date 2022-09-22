import BalanceTotal from "./components/BalanceTotal";
import ChartContainer from "./components/ChartContainer";

function App(props) {
  return (
    <div>
      <div className="app">
        <BalanceTotal />
        <ChartContainer />
      </div>
    </div>
  );
}

export default App;
