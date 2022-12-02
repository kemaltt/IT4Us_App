import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [workSpace, setWorkSpace] = useState("");

  const handleChange = (event) => {
    setWorkSpace(event.target.value);
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
              value={workSpace}
              label="WorkSpaces"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
    </div>
  );
}
