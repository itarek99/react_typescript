import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";

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
    <ThemeContextProvider>
      <Box />
    </ThemeContextProvider>
  );
};
export default App;
