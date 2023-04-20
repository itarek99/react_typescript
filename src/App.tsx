import UserContextProvider from "./components/context/UserContext";
import RandomNumber from "./components/restriction/RandomNumber";

const App = () => {
  return (
    <UserContextProvider>
      <div className="container mx-auto px-4 flex justify-center items-center h-screen gap-6">
        <RandomNumber value={150} negative />
      </div>
    </UserContextProvider>
  );
};
export default App;
