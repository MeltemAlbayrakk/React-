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
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
         Account Settings
        </Typography>
        <Box>
        <Container style={{height:"30%"}}> 
            <Typography>Name</Typography>  
            <Input
            onChange={(e)=>{setName(e.target.value)}}
            />
        </Container>

        <Container style={{height:"30%"}}> 
            <Typography>Surname</Typography>  
            <Input
         
            onChange={(e)=>{setSurname(e.target.value)}}
            />
        </Container>

        <Container style={{height:"30%"}}> 
            <Typography>Email</Typography>  
            <Input
            onChange={(e)=>{setEmail(e.target.value)}}
            />
        </Container>
        <Container style={{height:"30%"}}> 
            <Typography>Phone</Typography>  
            <Input
            type='number'
            onChange={(e)=>{setPhone(e.target.value)}}
            />
        </Container>
        <Container style={{height:"30%"}}> 
            <Typography>Age</Typography>  
            <Input
            type='number'
            onChange={(e)=>{setAge(e.target.value)}}
            />
        </Container>
        <Container style={{height:"30%"}}> 
            <Typography>Post</Typography>  
            <Input
            onChange={(e)=>{setPost(e.target.value)}}
            />
        </Container>
        <Container style={{height:"30%"}}> 
            <Typography>Joining Date</Typography>  
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker onChange={handleDateChange}  />
      </DemoContainer>
    </LocalizationProvider>
        </Container>

        </Box>
        <Button onClick={saveCustomer}>Save </Button>
        <Button onClick={onClose}>Close </Button>
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


  
<Box sx={{ backgroundColor:"#F0F0F0", height:"91vh"}}>
    <Box sx={{backgroundColor:"#F0F0F0",height:"90px"}}>
        <Box sx={{marginLeft:"20px",backgroundColor:"#FFFFFF",height:"70px", width:"95%"}} >
           
            <Box sx={{ '& > :not(style)': { m: 1 } ,}}>
              <Box sx={{ justifyContent:"center",display: 'flex', alignItems: 'flex-end' }}>
              <AddCircleIcon onClick={handleOpenModal} sx={{ color:"#684BF3", marginRight:"100px"}}/>
              <MyModal open={modalOpen} onClose={handleCloseModal} />
                <SearchIcon sx={{ color: '#9C99FD', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Search" variant="standard" />

                <BorderAllIcon onClick={ChangeCardForm}sx={{ marginLeft:"100px",color:"#684BF3"}}/>
                <DeleteIcon sx={{ marginLeft:"100px",color:"#684BF3"}}/>
                <StarBorderIcon sx={{color:"#684BF3" ,marginLeft:"30px"}}/>
              </Box>
            </Box>
        </Box>
    
     </Box>
    {
        cardForm ? <Box sx={{ justifyContent:"left",display: "flex", flexWrap: "wrap" }}>
          {rows.map((row) => (
        <Card sx={{ width:"335px", margin: "40px" }}>
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
          ))}

        
       
    

        
      
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
