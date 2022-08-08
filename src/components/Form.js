import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormGroup from '@mui/material/FormGroup';
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';


export default function Form() {
  const [minVal, setMinVal] = useState();
  const [maxVal, setMaxVal] = useState();
  const dispatch = useDispatch();

  const onMinChangeHandler = (event) => {
    setMinVal(event.target.value);
  };

  const onMaxChangeHandler = (event) => {
    setMaxVal(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "onSubmitHandler", minVal: minVal, maxVal: maxVal });
  };

  return (
    <FormGroup onClick={onSubmitHandler} style={{margin: 38, display: 'flex' }} >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }} >
      <InputLabel htmlFor="my-input" style={{color: 'red' , fontSize: 40 }} >Enter your range of price</InputLabel>
     
      <Input placeholder="minimum" onChange={onMinChangeHandler} />
    
      <Input placeholder="maximum" onChange={onMaxChangeHandler} />
      <Button type="submit" variant="outline" style={{color: 'white',fontSize: 15, margin: 10, backgroundColor: 'black' }} >Submit</Button>
      </Box>
    </FormGroup>
  );
}
