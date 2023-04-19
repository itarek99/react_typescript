type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = ({ name, messageCount, isLoggedIn }: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Hello ${name}, Welcome Back. You have ${messageCount} unread messages.`
          : "Please Login or Sing Up"}
      </h2>
    </div>
  );
};
export default Greet;
