import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import UserContextProvider from "./components/context/UserContext";

const App = () => {
  return (
    <UserContextProvider>
      <div className="container mx-auto px-4 flex justify-center items-center h-screen gap-6">
        <Private component={Profile} isLoggedIn />
      </div>
    </UserContextProvider>
  );
};
export default App;
