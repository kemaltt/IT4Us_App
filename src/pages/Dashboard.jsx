import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, useLocation } from "react-router-dom";

export default function Dashboard({
  workSpace,
  setWorkSpace,
  isLogin,
  setIsLogin,
  userData,
}) {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const el = location.state.el;
  const [workSpacesName, setWorkSpacesName] = useState(el.workSpaceName);
  const [boardsName, setBoardsName] = useState("");
  const [boardName, setBoardName] = useState(el.boardsName[0].boardName);
  const userName = userData[0].userName;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = () => {
    setToggle(!toggle);
  };
  console.log(toggle);
  console.log(el);
  console.log(workSpace);
  console.log(workSpacesName);
  console.log(boardsName);

  const handleChange = (event) => {
    setWorkSpacesName(event.target.value);
    const selectedBoardName = workSpace.find((el) => {
      return el.workSpaceName !== workSpacesName;
    });
    const boardsName = selectedBoardName.boardsName;
    setBoardName(boardsName[0].boardName);
    setBoardsName(boardsName);
  };

  const handleLogOut = () => {
    setIsLogin(false);
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <div className="nav_pages">
        <div className="logo">
          {/* <img src="trello.png" alt="logo" /> */}
          <div
            onClick={() => navigate(isLogin ? "/home" : "/")}
            className="nav_headline"
          >
            <h4>IT4US</h4>
            <h2>TODO</h2>
          </div>
          <div className="select_container">
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
              sx={{ pl: 3, pr: 3 }}
            >
              CREATE
            </Button>
          </div>
        </div>

        <div
          className="avatar"
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <Button
            onClick={() => navigate(-1)}
            variant="contained"
            color="warning"
          >
            Back
          </Button>
          <Avatar
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              m: 0.7,
              bgcolor: "secondary.main",
              // fontSize: '10px',
            }}
          ></Avatar>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <p style={{ color: "#7E34CF", margin: "0 15%" }}>{userName}</p>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
          </Menu>
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
            top: "3%",
            cursor: "pointer",
          }}
        />

        <h2>{workSpacesName}</h2>

        <div className="side_bar_boards">
          <h5>Boards</h5>
          {boardsName ? (
            boardsName.map((boardName, i) => (
              <p style={{ color: "#7E34CF", cursor: "pointer" }} key={i}>
                {boardName.boardName}
              </p>
            ))
          ) : (
            <p style={{ color: "#7E34CF", cursor: "pointer" }}>{boardName}</p>
          )}
        </div>
        <h5>Settings</h5>
      </div>
      <div
        style={{ width: toggle ? "100%" : null }}
        className="dash_work_space"
      >
        <div className="dash_board_title">
          <h2>{boardName} </h2>
          <AddCircleIcon style={{ color: "#7E34CF", cursor: "pointer" }} />
        </div>
        <div className="boards_container"></div>
      </div>
    </div>
  );
}
