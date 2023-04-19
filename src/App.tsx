import Greet from "./components/Greet";
import Counter from "./components/state/Counter";

const App = () => {
  const superHeros = [
    {
      first: "Bat",
      last: "Man",
    },
    {
      first: "Iron",
      last: "Man",
    },
    {
      first: "Ant",
      last: "Man",
    },
  ];

  return (
    <div>
      <Greet name="Tarek" messageCount={10} isLoggedIn={true} />
      <Counter />
    </div>
  );
};
export default App;
