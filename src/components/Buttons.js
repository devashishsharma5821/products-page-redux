import React from "react";
import { useDispatch } from "react-redux";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/system";


export default function Buttons() {
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    console.log(+event.target.innerText);
    
    if(value < page){
      dispatch({ type : 'prevSubmitHandler'});
    }else{
      dispatch({ type : 'nextSubmitHandler'});
    }
    setPage(value)
  };

  return (<>
     <Stack spacing={2} style={{margin: 38}} >
      <Typography color='primary' style={{
        fontSize:26,
        textAlign: 'center'
      }} >Page: {page}</Typography>
      <Box sx={{ display: 'flex'  ,justifyContent: 'center' }}>
      <Pagination count={4} page={page} onChange={handleChange} size="large" />
      </Box>
    </Stack>
   </>
  );
}
