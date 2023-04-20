import UserContextProvider from "./components/context/UserContext";
import List from "./components/generics/List";

const App = () => {
  return (
    <UserContextProvider>
      <div className="container mx-auto px-4 flex justify-center items-center h-screen gap-6">
        <List items={["Iron man", "Batman", "Flash"]} onClick={(item) => console.log(item)} />
        <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      </div>
    </UserContextProvider>
  );
};
export default App;
