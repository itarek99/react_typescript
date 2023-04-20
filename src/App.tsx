import UserContextProvider from "./components/context/UserContext";
import MutableRef from "./components/ref/MutableRef";

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
    <UserContextProvider>
      <MutableRef />
    </UserContextProvider>
  );
};
export default App;
