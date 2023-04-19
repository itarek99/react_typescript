import { Name } from "./PersonList.types";

type PersonType = {
  name: Name;
};

const Person = ({ name }: PersonType) => {
  return (
    <div>
      <h2>
        {name.first} {name.last}
      </h2>
    </div>
  );
};
export default Person;
