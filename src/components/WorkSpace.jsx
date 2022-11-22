import React from "react";
import { CgAttachment } from "react-icons/cg";

export default function WorkSpace({ workSpace, setToggle }) {
  const createWorkSpace = () => {
    setToggle(false);
  };

  return (
    <div className="work_space">
      {workSpace.map((el, i) => (
        <div
          key={i}
          style={{ background: i % 2 === 1 ? "#ebb328" : "#04e022" }}
          className="work_space_card"
        >
          <CgAttachment style={{ fontSize: "1.5rem" }} />
          <h3>{el.workSpaceName}</h3>
        </div>
      ))}
      <div
        onClick={createWorkSpace}
        style={{ background: "#5C17CF" }}
        className="work_space_card"
      >
        <h3>Create</h3>
      </div>
    </div>
  );
}
