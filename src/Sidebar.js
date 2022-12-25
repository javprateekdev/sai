import React from "react";
import Date from "./Date";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { styled } from "@mui/material";
import Divider from '@mui/material/Divider';

const StyledCal = styled(CalendarMonthIcon)`
  font-size: 40px;
  color: #ca5202f6;
  margin-top: 1px;
`;
const Sidebar = () => {
  return (
    <>
      <div
        style={{
          height: "500px",
          marginTop: "50px",
          position: "fixed",
          float: "right",
        }}
      >
        <div style={{ marginTop: "50px" }}>
          <h2
            style={{ marginTop: "30px", fontSize: "25px", marginLeft: "50px" }}
          >
            For Booking Tickets
          </h2>
        </div>

        <div style={{ display: "flex", marginTop: "20px" }}>
          <div>
            <Date />
          </div>
          <div>
            <StyledCal />
          </div>
        </div>
        <div>
          <input
            placeholder="Enter Name"
            style={{
              height: "40px",
              width: "300px",
              border: "1px solid #ca5202f6",
              fontSize: "20px",
              marginTop: "10px",
              borderRadius: "5px",
            }}
          />
          <input
            placeholder="Enter PhoneNumber"
            style={{
              height: "40px",
              width: "300px",
              border: "1px solid #ca5202f6",
              fontSize: "20px",
              marginTop: "10px",
              borderRadius: "5px",
            }}
          />
          <input
            placeholder="Enter Email id"
            style={{
              height: "40px",
              width: "300px",
              border: "1px solid #ca5202f6",
              fontSize: "20px",
              marginTop: "10px",
              borderRadius: "5px",
            }}
          />
          <button
            style={{
              height: "30px",
              width: "80px",
              fontSize: "20px",
              background: "#ca5202f6",
              color: "white",
              marginTop: "10px",
              marginLeft: "100px",
              borderRadius: "15px",
              marginBottom:"10px"
            }}
          >
            Submit
          </button>

        </div>
        <Divider />
        <div style={{ marginTop: "10px", fontSize: "22px",textAlign:"center" }}>Upcoming Events</div>
        <div style={{height:"210px",width:"300px",overflowY:"scroll"}}>
            <div style={{fontSize:"30px",border:"1px solid black",margin:"4px",borderRadius:"10px"}}>Event 1</div>
            
            <div style={{fontSize:"30px",border:"1px solid black",margin:"4px",borderRadius:"10px"}}>Event 2</div>
            <div style={{fontSize:"30px",border:"1px solid black",margin:"4px",borderRadius:"10px"}}>Event 3</div>
            <div style={{fontSize:"30px",border:"1px solid black",margin:"4px",borderRadius:"10px"}}>Event 4</div>
            <div style={{fontSize:"30px",border:"1px solid black",margin:"4px",borderRadius:"10px"}}>Event 5</div>
            <div style={{fontSize:"30px",border:"1px solid black",margin:"4px",borderRadius:"10px"}}>Event 6</div>
            <div style={{fontSize:"30px",border:"1px solid black",margin:"4px",borderRadius:"10px"}}>Event 7</div>

        </div>
      </div>
     
      <div></div>
    </>
  );
};

export default Sidebar;
