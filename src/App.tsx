import UserContextProvider from "./components/context/UserContext";
import Text from "./components/polymorphic/Text";

const App = () => {
  return (
    <UserContextProvider>
      <div>Hello</div>
      <Text as="h1" children="Hello World" />
    </UserContextProvider>
  );
};
export default App;
