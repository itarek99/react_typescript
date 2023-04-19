import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser({ name: "Tarek", email: "tarek@gmail.com" });
  };
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Log Out</button>
      {user ? (
        <div>
          <p>User Name: {user?.name}</p>
          <p>User Email: {user?.email}</p>
        </div>
      ) : (
        <p>you should login first</p>
      )}
    </div>
  );
};
export default User;
