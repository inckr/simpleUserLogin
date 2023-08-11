
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function App() {
  return (
    <Box borderRadius="10%"
    sx={{marginLeft:"40%",
      marginTop:"13%",
      width: 350,
      height: 430,
      border: "2px #eee solid",
      component:"form",
      autoComplete:"off",
      backgroundColor: 'gray',
      '&:hover': {
        backgroundColor: 'grey',
        opacity: [0.9, 0.8, 0.7],
        cursor:"pointer"
      },
    }}>
      <TextField id="filled-basic" label="Your Mail" variant="filled" sx="margin:18%"/>
      <TextField type='password' id="filled-basic" label="Password" variant="filled" sx="Left:18%"/> 
      <Button variant="contained" color="inherit" sx={{marginTop:"30%",
      marginLeft:"63px",
      width:"26vh",
      fontFamily:"sans-serif",
      '&:hover': {
        backgroundColor: 'black',
        color:"white",
        opacity: [0.9, 0.8, 0.7],
        cursor:"pointer"   
    }}}>
        Login
      </Button>
  </Box>
   );
}

export default App;
