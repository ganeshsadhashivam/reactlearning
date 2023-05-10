import React from "react";
import Button from "./Button";
import Card from "./Card";

// const Users = (props) => {
//   return (
//     <div>
//       <h1>name : {props.name}</h1>
//       <h2>job : {props.job}</h2>
//     </div>
//   );
// };

const Users = ({ name, job }) => {
  return (
    <div className="user">
      <h1>name :{name}</h1>
      <h2>job :{job}</h2>
      <Button>Learn More</Button>
    </div>
  );
};

//Default props
Users.defaultProps = {
  name: "Default",
  job: "Default job",
};
export default Users;
