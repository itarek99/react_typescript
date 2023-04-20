export type ProfileProp = {
  name: string;
};

const Profile = ({ name }: ProfileProp) => {
  return <div>User Name: {name}</div>;
};
export default Profile;
