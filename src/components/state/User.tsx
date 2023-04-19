import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
  age: number;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({ name: "Tarek", email: "tarek@gmail.com", age: 48 });
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
          <p>User Name: {user.name}</p>
          <p>User Email: {user.email}</p>
        </div>
      ) : (
        <p>you should login first</p>
      )}
    </div>
  );
};
export default User;
