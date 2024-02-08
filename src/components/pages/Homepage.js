import Sidebar from '../layouts/sidebar.js'
import Navbar from '../layouts/navbar.js'
import Content from '../layouts/content.js'
import Box from '@mui/material/Box';

export default function Homepage(){
    return(
        <>
        <Navbar/>
     <Sidebar/>

     <Box sx={{  marginLeft: "240px", flexGrow: 1 }}>
        <Content/>
     </Box>
     
     </>
       
   
   
    

    )
}