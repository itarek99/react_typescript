import UserContextProvider from "./components/context/UserContext";
import Toast from "./components/templateLiterals/Toast";

const App = () => {
  return (
    <UserContextProvider>
      <Toast position="center" />
    </UserContextProvider>
  );
};
export default App;
