import UserContextProvider from "./components/context/UserContext";
import Button from "./components/html/Button";

const App = () => {
  return (
    <UserContextProvider>
      <Button variant="primary" onClick={() => console.log("Clicked")}>
        Primary Button
      </Button>
    </UserContextProvider>
  );
};
export default App;
