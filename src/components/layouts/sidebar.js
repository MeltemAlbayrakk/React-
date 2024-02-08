import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import logo from '../images/dashmin.png'
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import StarIcon from '@mui/icons-material/Star';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {

  const [subMenuEcommerce, setSubMenuEcommerce] = React.useState(false);
  const [subMenuEmail, setSubMenuEmail] = React.useState(false);
  const   [subMenuToDoList, setSubMenuToDoList] = React.useState(false);
  const   [subMenuIcons, setSubMenuIcons] = React.useState(false);


  const handleSubMenuEcommerce= () => {
    setSubMenuEcommerce(!subMenuEcommerce);
  };
  const handleSubMenuEmail = () => {
    setSubMenuEmail(!subMenuEmail);
  };
  const handleSubMenuToDoList = () => {
    setSubMenuToDoList(!subMenuToDoList);
  };
  const handleSubMenuIcons= () => {
    setSubMenuIcons(!subMenuIcons);
  };
  return (
    <Box sx={{ display: 'flex' }}>   
     <AppBar
        position="fixed"
        sx={{ width:"10%",right:"91.5%",zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{backgroundColor:"#ffffff",width:"210px", height: "80px"}}>
          <img src={logo} alt="Logo" style={{ width: 220, height: 80}} />
          
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
    
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop:"75px",
            height: '90vh'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
       
   
        <Typography sx={{fontWeight:"bold",marginLeft:"15px", marginTop:"10px", marginBottom:"-5px"}}>Main</Typography>
        <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <PieChartIcon/>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
             
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={handleSubMenuEcommerce}>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Ecommerce" />
            {subMenuEcommerce ?<HorizontalRuleIcon sx={{color:"gray"}}/>:<AddIcon sx={{color:"gray"}}/>}
          </ListItemButton>
        </ListItem>
        {subMenuEcommerce && (
            <List>
              <ListItem disablePadding >
                <ListItemButton>
                  <ListItemIcon>
                    <ArrowForwardIcon sx={{marginLeft:"20px"}}/>
                  </ListItemIcon>
                  <ListItemText  primary="Dashboard 1" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <ArrowForwardIcon sx={{marginLeft:"20px"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Dashboard 2" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <ArrowForwardIcon sx={{marginLeft:"20px"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Orders" />
                </ListItemButton>
              </ListItem>
            </List>
          )}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <QueryStatsIcon />
            </ListItemIcon>
            <ListItemText primary="Social Media Analytics" />
          </ListItemButton>
        </ListItem>
      </List>
      


     
      <Typography sx={{fontWeight:"bold",marginLeft:"15px", marginTop:"10px", marginBottom:"-5px"}}>Apps</Typography>
      <List>
        <ListItem disablePadding onClick={handleSubMenuEmail}>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Email" />
            {subMenuEmail ?<HorizontalRuleIcon sx={{color:"gray"}}/>:<AddIcon sx={{color:"gray"}}/>}
          </ListItemButton>
        </ListItem>

        {subMenuEmail && (
            <List>
              <ListItem disablePadding >
                <ListItemButton>
                  <ListItemIcon>
                    <ArrowForwardIcon sx={{marginLeft:"20px"}}/>
                  </ListItemIcon>
                  <ListItemText  primary="Inbox" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <ArrowForwardIcon sx={{marginLeft:"20px"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Read" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <ArrowForwardIcon sx={{marginLeft:"20px"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Compose" />
                </ListItemButton>
              </ListItem>
            </List>
          )}

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MarkUnreadChatAltIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={handleSubMenuToDoList}>
          <ListItemButton>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="To Do List" />
            {subMenuToDoList ?<HorizontalRuleIcon sx={{color:"gray"}}/>:<AddIcon sx={{color:"gray"}}/>}
          </ListItemButton>
        </ListItem>

        {subMenuToDoList && (
            <List>
              <ListItem disablePadding >
                <ListItemButton>
                  <ListItemIcon>
                    <ArrowForwardIcon sx={{marginLeft:"20px"}}/>
                  </ListItemIcon>
                  <ListItemText  primary="Tasks" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <ArrowForwardIcon sx={{marginLeft:"20px"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Add New" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <ArrowForwardIcon sx={{marginLeft:"20px"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Details" />
                </ListItemButton>
              </ListItem>
            </List>
          )}

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Invoice" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ShowChartIcon />
            </ListItemIcon>
            <ListItemText primary="Project Manager" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ShowChartIcon />
            </ListItemIcon>
            <ListItemText primary="File Manager" />
          </ListItemButton>
        </ListItem>
      </List>
      <Typography sx={{fontWeight:"bold",marginLeft:"15px", marginTop:"10px", marginBottom:"-5px"}}>UI Elements</Typography>
        <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Widgets" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={handleSubMenuIcons}>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Icons(Aniloan)" />
            {subMenuIcons ?<HorizontalRuleIcon sx={{color:"gray"}}/>:<AddIcon sx={{color:"gray"}}/>}
          </ListItemButton>
          </ListItem>
          {subMenuIcons && (
            <List>
              <ListItem disablePadding >
                <ListItemButton>
                  <ListItemIcon>
                    <ArrowForwardIcon sx={{marginLeft:"20px"}}/>
                  </ListItemIcon>
                  <ListItemText  primary="Ico font" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <ArrowForwardIcon sx={{marginLeft:"20px"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Materialize Icons" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <ArrowForwardIcon sx={{marginLeft:"20px"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Et-Line Icons" />
                </ListItemButton>
              </ListItem>
            </List>
          )}
          
       
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Color" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Extra Component" />
          </ListItemButton>
        </ListItem>
      </List>


      <Typography sx={{fontWeight:"bold",marginLeft:"15px", marginTop:"10px", marginBottom:"-5px"}}>Form & Table</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DynamicFormIcon />
            </ListItemIcon>
            <ListItemText primary="Form Elements" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DynamicFormIcon />
            </ListItemIcon>
            <ListItemText primary="Form Layout" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DynamicFormIcon />
            </ListItemIcon>
            <ListItemText primary="Form Wizard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DynamicFormIcon />
            </ListItemIcon>
            <ListItemText primary="Form Validation" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DynamicFormIcon />
            </ListItemIcon>
            <ListItemText primary="Form Repeater" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DynamicFormIcon />
            </ListItemIcon>
            <ListItemText primary="Table" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DynamicFormIcon />
            </ListItemIcon>
            <ListItemText primary="Table Extended" />
          </ListItemButton>
        </ListItem>
      
      </List>


      <Typography sx={{fontWeight:"bold",marginLeft:"15px", marginTop:"10px", marginBottom:"-5px"}}>Pages</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary="User Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="FAQ" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Pricing" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccessTimeFilledIcon />
            </ListItemIcon>
            <ListItemText primary="Timeline" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Account Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Authentication" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Miscellaneous" />
          </ListItemButton>
        </ListItem>
      </List>


      <Typography sx={{fontWeight:"bold",marginLeft:"15px", marginTop:"10px", marginBottom:"-5px"}}>Charts & Maps</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PieChartIcon />
            </ListItemIcon>
            <ListItemText primary="Charts" />
          </ListItemButton>
      </ListItem>
      </List>


      <Typography sx={{fontWeight:"bold",marginLeft:"15px", marginTop:"10px", marginBottom:"-5px"}}>Extensions</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DesignServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Sweet Alert" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DesignServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Toastr" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DesignServicesIcon />
            </ListItemIcon>
            <ListItemText primary="NoUI Slider" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DesignServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Drag & Drop" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DesignServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Tour" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DesignServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Swiper" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DesignServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Treeview" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DesignServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Block-UI" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DesignServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Media Player" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DesignServicesIcon />
            </ListItemIcon>
            <ListItemText primary="i18n" />
          </ListItemButton>
        </ListItem>
      </List>


      <Typography sx={{fontWeight:"bold",marginLeft:"15px", marginTop:"10px", marginBottom:"-5px"}}>Others</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DesignServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Menu Levels" />
          </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DesignServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Disable" />
          </ListItemButton>
      </ListItem>
      </List>

      <Typography sx={{fontWeight:"bold",marginLeft:"15px", marginTop:"10px", marginBottom:"-5px"}}>Support</Typography>
      

      </Drawer>
    
      
    
    </Box>
  );
}
