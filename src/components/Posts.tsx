import React, { useState } from "react";

type PostProps = {
  id: number;
  title: string;
  toggle?: boolean;
  children: string;
};
const Posts = ({ id, title, toggle, children }: PostProps) => {
  const [newTitle, setNewTitle] = useState("");
  const changeTitle = (e: React.MouseEvent) => {
    setNewTitle("How are you?");
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Click Here</button>
    </div>
  );
};
export default Posts;
