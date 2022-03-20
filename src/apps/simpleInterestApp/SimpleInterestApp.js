import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SimpleInterestApp = () => {
 const[p,SetP] =useState(0);            
 const[t,SetT] =useState(0);            
 const[r,SetR] =useState(0);            
 const[si,SetSI] =useState(0);            

function calculateSi(){
    SetSI((p*t*r)/100);
}


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Simple Interest
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <TextField onChange={(event)=>SetP(event.target.value)} id="outlined-basic" label="Principal" variant="outlined" />
      <TextField onChange={(event)=>SetT(event.target.value)} id="outlined-basic" label="Time" variant="outlined" />
      <TextField onChange={(event)=>SetR(event.target.value)} id="outlined-basic" label="Rate" variant="outlined" />
      <br />
      <br />
      <Button onClick={calculateSi} variant="contained">Calculate</Button>

      <h3>The Simple interest is : {si}</h3>
    </>
  );
};

export default SimpleInterestApp;
