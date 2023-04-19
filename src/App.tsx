import User from "./components/context/User";
import UserContextProvider from "./components/context/UserContext";

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
      <User />
    </UserContextProvider>
  );
};
export default App;
