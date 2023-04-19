import Person from "./Person";
import { PersonsPropsType } from "./PersonList.types";

const PersonList = ({ persons }: PersonsPropsType) => {
  return (
    <div>
      <div>
        {persons.map((person, index) => (
          <Person key={index} name={person} />
        ))}
      </div>
    </div>
  );
};
export default PersonList;
