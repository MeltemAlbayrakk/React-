import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import user from '../images/profile.webp'
import Modal from '@mui/material/Modal';
import { Container, Input } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CreateIcon from '@mui/icons-material/Create';

import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


const columns = [
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'surname', headerName: 'Surname', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 200 },
  { field: 'age',headerName: 'Age',type: 'number',width: 90,},
  { field: 'post', headerName: 'Posts', width: 130 },
  { field: 'joiningDate', headerName: 'Joining Date', width: 130 },
  { field: 'salary', headerName: 'Salary', width: 130 },
  { 
    field: 'actions', 
    headerName: 'Actions', 
    width: 130, 
    renderCell: (params) => (
      <>
        <CreateIcon sx={{ color: '#9C99FD', mr: 1, my: 0.5 }} />
        <DeleteIcon sx={{ color: '#9C99FD', mr: 1, my: 0.5 }} />
      </>
    ) 
  }
];




const MyModal = ({ open, onClose }) => {

  const [name,setName] = React.useState("");
  const [surname,setSurname] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [phone,setPhone] = React.useState("");
  const [age,setAge] = React.useState("");
  const [post,setPost] = React.useState("");
  const [date,setDate] = React.useState("");
  const [rows,setRows] = React.useState([]);

  const handleDateChange =(date)=>{
    setDate(date);  
  }

  const fetchCustomers =async()=>{
    try {
        const response=  await fetch("/getCustomers")
        if (!response.ok) {
            throw new Error("Network error")
        }
        const data = await response.json();
        setRows(data);
    } catch (error) {
        console.error("Error fetching data:",error)
    }
    
   
  }

  const saveCustomer =async ()=>{
    const requestOptions = {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ name, surname, email, phone, age, post, date })
    };
    console.log("giden :",requestOptions)
    const responseAddCustomer = await fetch("/addCustomer",requestOptions)
    console.log("gelen :",responseAddCustomer)
    onClose();
    fetchCustomers(); 
    
  }



  return (
    
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height:700,
          width: 600,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography sx={{ marginLeft:"200px",fontWeight:"bold", color:"#333333"}}>Account Settings</Typography> 
        <Box>
      
    
        
        <Container style={{ marginTop:"0px",marginLeft:"100px",height:"30%"}}> 
            <Typography sx={{fontWeight:"bold", color:"#333333"}}>Name</Typography>  
            <Input
            sx={{backgroundColor:"#F0F0F0", borderRadius:"10px", width:"60%",height:"40px",marginBottom:"20px"}}
            placeholder='Type Here'
            onChange={(e)=>{setName(e.target.value)}}
            />
        </Container>

        <Container style={{ marginLeft:"100px",height:"30%"}}> 
            <Typography sx={{fontWeight:"bold", color:"#333333"}}>Surname</Typography>  
            <Input
         sx={{backgroundColor:"#F0F0F0", borderRadius:"10px", width:"60%",height:"40px",marginBottom:"20px"}}
         placeholder='Type Here'
            onChange={(e)=>{setSurname(e.target.value)}}
            />
        </Container>

        <Container style={{ marginLeft:"100px",height:"30%"}}> 
            <Typography sx={{fontWeight:"bold", color:"#333333"}}>Email</Typography>  
            <Input
            sx={{backgroundColor:"#F0F0F0", borderRadius:"10px", width:"60%",height:"40px",marginBottom:"20px"}}
            placeholder='Type Here'
            onChange={(e)=>{setEmail(e.target.value)}}
            />
        </Container>
        <Container style={{ marginLeft:"100px",height:"30%"}}> 
            <Typography sx={{fontWeight:"bold", color:"#333333"}}>Phone</Typography>  
            <Input
            sx={{backgroundColor:"#F0F0F0", borderRadius:"10px", width:"60%",height:"40px",marginBottom:"20px"}}
            type='number'
            placeholder='Type Here'
            onChange={(e)=>{setPhone(e.target.value)}}
            />
        </Container>
        <Container style={{ marginLeft:"100px",height:"30%"}}> 
            <Typography sx={{fontWeight:"bold", color:"#333333"}}>Age</Typography>  
            <Input
            sx={{backgroundColor:"#F0F0F0", borderRadius:"10px", width:"60%",height:"40px",marginBottom:"20px"}}
            type='number'
            placeholder='Type Here'
            onChange={(e)=>{setAge(e.target.value)}}
            />
        </Container>
        <Container style={{ marginLeft:"100px",height:"30%"}}> 
            <Typography sx={{fontWeight:"bold", color:"#333333"}}>Post</Typography>  
            <Input
            sx={{backgroundColor:"#F0F0F0", borderRadius:"10px", width:"60%",height:"40px",marginBottom:"20px"}}
            placeholder='Type Here'
            onChange={(e)=>{setPost(e.target.value)}}
            />
        </Container>
        <Container style={{ marginLeft:"100px",height:"30%"}}> 
            <Typography sx={{fontWeight:"bold", color:"#333333"}}>Joining Date</Typography>  
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker onChange={handleDateChange}  />
      </DemoContainer>
    </LocalizationProvider>
        </Container>
  

        </Box>
        <Button onClick={saveCustomer}sx={{ marginTop:"30px",marginLeft:"180px",fontSize:"10px",fontWeight:"bold",height:"50px",backgroundColor: "#6347E8", borderRadius: "50px", "&:hover": { backgroundColor: "#9C99FD" } }} variant="contained">Save Changes</Button>
        <Button sx={{marginTop:"33px",marginLeft:"20px",color:"red", fontSize:"13px",fontWeight:"bold"}}onClick={onClose}>Cancel </Button>
      </Box>
    </Modal>
  );
};

export default function DataTable() {
    
 const [cardForm,setCardForm] = React.useState(false);
 const [rows,setRows] = React.useState([]);
 

  const loadCustomers =async()=>{
    try {
        const response=  await fetch("/getCustomers")
        if (!response.ok) {
            throw new Error("Network error")
        }
        const data = await response.json();
        setRows(data);
    } catch (error) {
        console.error("Error fetching data:",error)
    }
    
   
  }
   
  const ChangeCardForm =()=>{
    if (cardForm) {
      setCardForm(false)
    }else{
      setCardForm(true)
    }
  
  }

  const deleteCustomer = (customerId) => {
    // Burada deleteCustomer fonksiyonunu kullanarak, customerId ile belirtilen müşteriyi silme isteğini gönderin
    console.log('Deleting customer with id:', customerId);
  };

React.useEffect (()=>{
   loadCustomers();
    },[])

    const [modalOpen, setModalOpen] = React.useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };
  

  return (<>


  
<Box sx={{ backgroundColor:"#F0F0F0", height:"90vh"}}>
    <Box sx={{backgroundColor:"#F0F0F0",height:"90px"}}>
        <Box sx={{marginLeft:"20px",backgroundColor:"#FFFFFF",height:"70px", width:"95%"}} >
           
            <Box sx={{ '& > :not(style)': { m: 1 } ,}}>
              <Box sx={{ justifyContent:"center",display: 'flex', alignItems: 'flex-end' }}>
              <AddCircleIcon onClick={handleOpenModal} sx={{ color:"#684BF3", marginLeft:"-100px",marginRight:"30px", cursor:"pointer"}}/>
              <MyModal open={modalOpen} onClose={handleCloseModal} />
               
                <TextField sx={{ justifyContent:"center",borderRadius:"10px" ,marginTop:"10px",height:"50px",width:"400px",backgroundColor:"#F0F0F0",}} id="" label=" Search Here" variant="standard" />
              <SearchIcon sx={{ marginLeft:"10px", color: '#9C99FD', mr: 1, my: 0.5 ,cursor:"pointer"}} />
                <BorderAllIcon onClick={ChangeCardForm}sx={{ marginLeft:"600px",color:"#684BF3",cursor:"pointer"}}/>
                <DeleteIcon  sx={{ marginLeft:"100px",color:"#684BF3",cursor:"pointer"}}/>
                <StarBorderIcon sx={{color:"#684BF3" ,marginLeft:"30px",cursor:"pointer"}}/>
              </Box>
            </Box>
        </Box>
    
     </Box>
    {
        cardForm ? <Box sx={{justifyContent:"left",display: "flex", flexWrap: "wrap" }}>
          
          {rows.map((row)=>{
            <Card sx={{  width:"335px", margin: "40px" }}>
          <Box sx={{ display: "flex", width: "100px", height: "100px", margin: "30px" }}>
            <img src={user} style={{ borderRadius: "50%" }} />
            <Box sx={{ marginLeft: "40px", float: "right" }}>
              <Typography gutterBottom variant="h5" component="div" color="text.secondary">
              {row.name} {row.surname}
              </Typography>
              <Typography gutterBottom variant="h7" component="div" color="text.secondary">
              {row.post}
              </Typography>
            </Box>
          </Box>
          <CardContent>
            <Typography gutterBottom variant="body2" component="div" color="text.secondary">
              {row.email}
            </Typography>
            <Typography gutterBottom variant="body2" component="div" color="text.secondary">
              {row.phone}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {row.address}
            </Typography>
          </CardContent>
          <CardActions>
        
          </CardActions>
        </Card>
          })}
 

        
       
    

        
      
      </Box>
      
    :
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    
   
  
    }

  

</Box>
   
    </>
  );
}
