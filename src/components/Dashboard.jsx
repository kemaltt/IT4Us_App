import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate, useLocation } from "react-router-dom";

export default function Dashboard({ workSpace, setWorkSpace }) {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const el = location.state.el;
  const [workSpacesName, setWorkSpacesName] = useState(el.workSpaceName);
  const [boardsName, setBoardsName] = useState(el.boardName);

  const isOpen = () => {
    setToggle(!toggle);
  };
  console.log(toggle);
  console.log(el);
  console.log(workSpace);
  console.log(workSpacesName);

  const handleChange = (event) => {
    setWorkSpacesName(event.target.value);
    const selectedBoardName = workSpace.find((el) => {
      return el.workSpaceName !== workSpacesName;
    });
    console.log(selectedBoardName);
    setBoardsName(selectedBoardName.boardName);
  };
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <div className="nav_pages">
        <div onClick={() => navigate("/")} className="logo">
          {/* <img src="trello.png" alt="logo" /> */}
          <h4>T4US</h4>
          <h2>TODO</h2>
        </div>

        <div
          className=""
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel id="demo-simple-select-label">WorkSpaces</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={workSpacesName}
              label="WorkSpaces"
              onChange={handleChange}
            >
              {workSpace &&
                workSpace.map((ele, i) => (
                  <MenuItem key={i} value={ele.workSpaceName}>
                    <span>{i + 1}</span> . {ele.workSpaceName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ pl: 5, pr: 5 }}
          >
            CREATE
          </Button>
        </div>

        <div>
          <Avatar
            sx={{
              m: 0.7,
              bgcolor: "secondary.main",
              // fontSize: '10px',
            }}
          ></Avatar>
          {/* <p style={{ color: "white" }}>{userName}</p> */}
        </div>
      </div>
      <h3>{workSpacesName}</h3>
      <ArrowForwardIosIcon
        onClick={isOpen}
        style={{
          color: "white",
          position: "absolute",
          cursor: "pointer",
          display: toggle ? "none" : "block",
        }}
      />
      <div
        style={{ transform: toggle ? "translateX(0%)" : null }}
        className="side_bar"
      >
        <ArrowBackIosNewIcon
          onClick={isOpen}
          style={{
            color: "gray",
            position: "absolute",
            right: "3%",
            cursor: "pointer",
          }}
        />
      </div>
      <div
        style={{ width: toggle ? "100%" : null }}
        className="dash_work_space"
      >
        <h2>{boardsName} </h2>
      </div>
    </div>
  );
}
