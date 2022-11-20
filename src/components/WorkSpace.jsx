import React from "react";

export default function WorkSpace({ workSpace,setToggle }) {

    const createWorkSpace=()=>{
        setToggle(false)
    }

  return (
    <div className="work_space">
      {workSpace.map((el, i) => (
 
        <div
          key={i}
          style={{ background: i % 2 === 1 ? "#c16ecf" : "#0e76ec" }}
          className="work_space_card"
        >
          <h3>{el.workSpaceName}</h3>
        </div>

    
     
      ))}
          <div
        onClick={createWorkSpace}
          style={{ background:  "#5C17CF" }}
          className="work_space_card"
        >
          <h3 >Create</h3>
        </div>
    </div>
  );
}
