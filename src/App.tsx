import UserContextProvider from "./components/context/UserContext";

const App = () => {
  return (
    <UserContextProvider>
      <div>Hello</div>
    </UserContextProvider>
  );
};
export default App;
