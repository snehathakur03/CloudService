import React from "react";
import { Container,Grid,Box, Typography ,Card,CardContent,Button,ListItem,ListItemIcon, List, Divider,Accordion  ,AccordionSummary ,AccordionDetails,} from '@mui/material';
import './App.css';
import { Check,ExpandMore  } from "@mui/icons-material";

export default function MainContent() {

 
  return (
    <>
   <Box style={{backgroundColor:"rgb(60 13 153)"}}>
   
    <Container fixed>

    <Box className="header">
    <Grid container >
        <Grid item xs={4} sm={6} md={8} >
          <a href="#home" className="logo">SwiftServe Cloud</a>
        </Grid>
        <Grid item xs={2} sm={1.5} md>
        <a className="Navtext" href="#features">Features</a>
        </Grid>
        <Grid item xs={2} sm={1.5} md>
        <a className="Navtext" href="#pricing">Pricing</a>
        </Grid>
        <Grid item xs={2} sm={1.5} md>
        <a className="Navtext" href="#login">Login</a>
        </Grid>
        <Grid item xs={2} sm={1.5} md>
        <a className="Navtext" href="#signup">Signup</a>
        </Grid>
        </Grid>
      </Box>

      <Box className="content" >

      <Grid container>
        <Grid item xs={12} sm={12} md={6} display="flex" alignItems="center" paddingRight="7rem" sx={{ "@media (max-width: 768px)": { paddingRight: "0" ,textAlign:"center"}}}>
          <Box>
            <Typography className="headertext" variant="h4">High Performant Servers tailored to your needs</Typography>
            <Typography variant="body1" style={{fontSize:"0.9rem", marginTop:"1rem",color:"rgb(247 250 252)"}}> Our cloud provisions the best servers, with fast SSD, 
            powerful Xeon Processors, whenever you need it. Oh, and we have 99.9% SLA</Typography>

            <Button className="Btn1" sx={{width:"auto !important", marginTop:"2rem", fontSize:"0.9rem !important", padding:"1.1rem 2rem !important"}} variant="contained">Start Your 15 Day Free Trial</Button>
 
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}  sx={{ "@media (max-width: 768px)": { marginTop:"6rem",display:"flex", justifyContent:"center"}}}>
          <img width="80%" justify-content="end" alt="cloud" src="https://treact.owaiskhan.me/static/media/server-illustration-2.759ff537a33274f6344f66aecc40dcac.svg"></img>
        </Grid>
      </Grid>
      </Box>

      <Box className="FeatureBox" >
        <Box paddingLeft="10rem" paddingRight="10rem"  sx={{ "@media (max-width: 768px)": {paddingRight:"0",paddingLeft:"0"}}}>
            <Typography className="headertext" variant="h4" marginBottom="1rem"  textAlign="center !important">Amazing Features</Typography>
            <Typography variant="body2"  textAlign="center !important" style={{fontSize:"0.9rem", color:"rgb(226 232 240)", }}> Our cloud provisions the best servers, with fast SSD, 
            powerful Xeon Processors, whenever you need it. Oh, and we have 99.9% SLA</Typography>
      </Box>

      <Grid container  marginTop="4rem">
        <Grid item xs={6} sm md={4} padding="0px 20px">
          <Box className="iconBox">
            <img width="25rem" alt="shieldimg" src="https://treact.owaiskhan.me/static/media/shield-icon.daefe14b320b14fbd9cbd18908ac93ec.svg"></img>
          </Box>
          <Box className="iconContent" marginTop="1rem">
            <Typography className="iconHead" marginBottom="0.5rem" >Secure</Typography>
            <Typography className="iconText">We strictly only deal with vendors that provide top notch security infrastructure.</Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sm md={4} padding="0px 20px">
        <Box className="iconBox">
            <img width="25rem" alt="shieldimg" src="https://treact.owaiskhan.me/static/media/support-icon.f9253ffa8cb6ffde5bbaa05eb5136375.svg"></img>
          </Box>
          <Box className="iconContent" marginTop="1rem">
            <Typography className="iconHead" marginBottom="0.5rem" >24/7 Support</Typography>
            <Typography className="iconText">We strictly only deal with vendors that provide top notch security infrastructure.</Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sm md={4} padding="0px 20px" sx={{"@media(max-width:425px)": {marginTop:"4rem"}}}>
        <Box className="iconBox">
            <img width="25rem" alt="shieldimg" src="https://treact.owaiskhan.me/static/media/customize-icon.367468c90fd796009b97fbfba67b2c6a.svg"></img>
          </Box>
          <Box className="iconContent" marginTop="1rem">
            <Typography className="iconHead" marginBottom="0.5rem" >Customizable</Typography>
            <Typography className="iconText">We strictly only deal with vendors that provide top notch security infrastructure.</Typography>
          </Box>
        </Grid>
      
      <Grid item xs={6} sm md={4} padding="0px 20px" marginTop="4rem" >
        <Box className="iconBox">
          <img width="25rem" alt="shieldimg" src="https://treact.owaiskhan.me/static/media/reliable-icon.1367510a8f0a1bec76dc425d25f92f43.svg"></img>
        </Box>
        <Box className="iconContent" marginTop="1rem">
          <Typography className="iconHead" marginBottom="0.5rem" >Reliable</Typography>
          <Typography className="iconText">We strictly only deal with vendors that provide top notch security infrastructure.</Typography>
        </Box>
      </Grid>

      <Grid item xs={6} sm md={4} padding="0px 20px"  marginTop="4rem">
      <Box className="iconBox">
          <img width="25rem" alt="shieldimg" src="https://treact.owaiskhan.me/static/media/fast-icon.dbb971a73d4805d2fc3bcdacdb55beba.svg"></img>
        </Box>
        <Box className="iconContent" marginTop="1rem">
          <Typography className="iconHead" marginBottom="0.5rem" >Fast</Typography>
          <Typography className="iconText">We strictly only deal with vendors that provide top notch security infrastructure.</Typography>
        </Box>
      </Grid>

      <Grid item xs={6} sm md={4} padding="0px 20px"  marginTop="4rem">
      <Box className="iconBox">
          <img width="25rem" alt="shieldimg" src="https://treact.owaiskhan.me/static/media/simple-icon.673b7e1750b2a4ef32907fc164828d00.svg"></img>
        </Box>
        <Box className="iconContent" marginTop="1rem">
          <Typography className="iconHead" marginBottom="0.5rem" >Easy</Typography>
          <Typography className="iconText">We strictly only deal with vendors that provide top notch security infrastructure.</Typography>
        </Box>
      </Grid>
      </Grid>

      </Box>

      <Box className="FeatureBox" >
      <Box paddingLeft="10rem" paddingRight="10rem"  sx={{ "@media (max-width: 768px)": {paddingRight:"0",paddingLeft:"0"}}}>
            <Typography className="headertext" variant="h4" marginBottom="1rem"  textAlign="center !important">Affordable Pricing</Typography>
            <Typography variant="body2"  textAlign="center !important" style={{fontSize:"0.9rem", color:"rgb(226 232 240)", }}>  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua.</Typography>
      </Box>

      <Grid container spacing={2.5} marginTop="4rem" justifyContent="center">
        <Grid item xs={10} sm md >
        <Card sx={{ padding: "2rem", "@media(max-width:425px)":{padding:"3rem"}}}>
          <CardContent style={{padding:"0px"}}>
          <Typography variant="body" className="cardHeader" fontWeight="700 !important">PERSONAL</Typography>

          <Box display="flex" justifyContent="space-between" marginTop="1.5rem">
          <Typography variant="body" className="currentPrice" fontWeight="700 !important">$9<Typography variant="body" fontSize="1rem" fontWeight="700 !important">.99/month</Typography></Typography>
          <Typography variant="body" className="oldPrice" fontWeight="700 !important">$11.99</Typography>
          </Box>

          <Typography variant="body1" className="cardText">
          Perfect for when you want to host your personal blog or a hobby side project.
          </Typography>

          <Divider sx={{margin:"0px !important"}}/>

          <List sx={{height:"24rem"}}>
          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">2 Core Xeon CPU</Typography>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">1 GB RAM</Typography>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">30 GB SSD</Typography>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">1 TB Transfer</Typography>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">99.9% Uptime</Typography>
          </ListItem>
          </List>

          <Button className="Btn1" variant="contained">Create Server</Button>

          </CardContent>
        </Card>
        </Grid>

        <Grid item xs={10} sm md >
        <Card sx={{ padding: "2rem", "@media(max-width:425px)":{padding:"3rem"}}}>
          <CardContent style={{padding:"0px"}}>
          <Typography variant="body" className="cardHeader" fontWeight="700 !important">BUSINESS</Typography>

          <Box display="flex" justifyContent="space-between" marginTop="1.5rem">
          <Typography variant="body" className="currentPrice" fontWeight="700 !important">$15<Typography variant="body" fontSize="1rem" fontWeight="700 !important">.99/month</Typography></Typography>
          <Typography variant="body" className="oldPrice" fontWeight="700 !important">$19.99</Typography>
          </Box>

          <Typography variant="body1" className="cardText">
          Perfect for hosting blogs with lots of traffic or heavy development projects
          </Typography>

          <Divider sx={{margin:"0px !important"}}/>

          <List sx={{height:"24rem"}}>
          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">4 Core Xeon CPU</Typography>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">2 GB RAM</Typography>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">100 GB SSD</Typography>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">3 TB Transfer</Typography>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">99.9% Uptime</Typography>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">Free Domain & SSL</Typography>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">Free DNS Management</Typography>
          </ListItem>

          </List>

          <Button className="Btn1" variant="contained">Create Server</Button>

          </CardContent>
        </Card>
        </Grid>

        <Grid item xs={10} sm={6} md sx={{ "@media (max-width: 768px)":{marginTop:"2rem"}, "@media (max-width: 425px)":{marginTop:"20px", paddingTop:"0px !important"}}}>
        <Card sx={{ padding: "2rem", "@media(max-width:425px)":{padding:"3rem"}}}>
          <CardContent style={{padding:"0px"}}>
          <Typography variant="body" className="cardHeader" fontWeight="700 !important">ENTERPRISE</Typography>

          <Box display="flex" justifyContent="space-between" marginTop="1.5rem">
          <Typography variant="body" className="currentPrice" fontWeight="700 !important">$25<Typography variant="body" fontSize="1rem" fontWeight="700 !important">.99/month</Typography></Typography>
          <Typography variant="body" className="oldPrice" fontWeight="700 !important">$29.99</Typography>
          </Box>

          <Typography variant="body1" className="cardText">
          Perfect for hosting production websites & API services with high traffic load
          </Typography>

          <Divider sx={{margin:"0px !important"}}/>

          <List sx={{height:"24rem"}}>
          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">8 Core Xeon CPU</Typography>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">8 GB RAM</Typography>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">300 GB SSD</Typography>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">Unlimited Transfer</Typography>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">99.9% Uptime</Typography>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">Free Domain & SSL</Typography>
          </ListItem>

          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">Free DNS Management</Typography>
          </ListItem>


          <ListItem disablePadding sx={{marginTop:"1.5rem"}}> 
              <ListItemIcon>
                <Check sx={{ fontSize: 14,fontWeight:600, color: 'white' }}/>
              </ListItemIcon>
              <Typography variant="body1" className="Listitem">Free Offsite Backup</Typography>
          </ListItem>

          </List>

          <Button className="Btn1" variant="contained">Create Server</Button>

          </CardContent>
        </Card>
        </Grid>
      </Grid>
   

      </Box>

    </Container>
   </Box>

    <Box>     
    <Container fixed>
    <Grid container marginTop="8rem" marginBottom="8rem" >
        <Grid item  sm={12} md={6} display="flex" alignItems="center" paddingRight="7rem" sx={{ "@media (max-width: 768px)": { paddingRight: "0" ,textAlign:"center"}}}>
          <Box>
          <Typography variant="h6" style={{fontSize:"0.9rem", fontWeight:"700",color:"rgb(100 21 255)"}}>Reliable</Typography>
            <Typography className="headertext" sx={{color:"rgb(36 62 99) !important", marginTop:"1rem"}} variant="h4">Highly Redundant Servers With Backup</Typography>
            <Typography variant="body1" style={{fontSize:"0.9rem", marginTop:"1rem",fontWeight:"500",lineHeight:"1.625",color:"rgb(124 139 161)"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            <Button className="Btn1" sx={{width:"auto !important", marginTop:"2rem"}} variant="contained">Learn More</Button>
 
          </Box>
        </Grid>
        <Grid item sm={12} md={6} sx={{ "@media (max-width: 768px)": { marginTop:"6rem",display:"flex", justifyContent:"center"}}}> 
          <img width="80%" justify-content="end" alt="cloud" src="https://treact.owaiskhan.me/static/media/server-redundancy-illustration.c60061a07bc1cae436e557144949fd62.svg"></img>
        </Grid>
      </Grid>


      <Grid container marginTop="8rem" marginBottom="8rem" >
        <Grid item sm={12} md={6} sx={{ "@media (max-width: 768px)": { marginTop:"6rem",display:"flex", justifyContent:"center"}}}>
          <img width="80%" justify-content="end" alt="cloud" src="https://treact.owaiskhan.me/static/media/server-secure-illustration.7c9a441e69a156e36492100dee01526e.svg"></img>
        </Grid>
        <Grid item sm={12} md={6} display="flex" alignItems="center" paddingRight="7rem"  sx={{ "@media (max-width: 768px)": { paddingRight: "0" ,textAlign:"center",marginTop:"6rem"}}}>
          <Box>
          <Typography variant="h6" style={{fontSize:"0.9rem", fontWeight:"700",color:"rgb(100 21 255)"}}>Secure</Typography>
            <Typography className="headertext" sx={{color:"rgb(36 62 99) !important", marginTop:"1rem"}} variant="h4">State of the Art Computer Security</Typography>
            <Typography variant="body1" style={{fontSize:"0.9rem", marginTop:"1rem",fontWeight:"500",lineHeight:"1.625",color:"rgb(124 139 161)"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            <Button className="Btn1" sx={{width:"auto !important", marginTop:"2rem"}} variant="contained">Learn More</Button>
          </Box>
        </Grid>
      
      </Grid>

    </Container>
    </Box>

    <Box style={{backgroundColor:"rgb(60 13 153)"}}>
    <Container fixed>
      <Box paddingTop="6rem" paddingBottom="6rem">
        <Box>
          <Typography className="headertext" variant="h4" marginBottom="1rem"  textAlign="center !important">Frequently Asked Questions</Typography>
          <Typography variant="body2"  textAlign="center !important" sx={{fontSize:"0.9rem", color:"rgb(226 232 240)", padding:"0 20rem", "@media (max-width: 768px)": {padding:"0"}}} > 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography> 
        </Box>

      <Box className="FeatureBox" sx={{paddingBottom:"0 !important"}}>
       <Grid container spacing={4}>
        <Grid item sm={12} md>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
          Is lunch provided free of cost ?
          </AccordionSummary>
          <AccordionDetails>
          Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch.
          This limit is enough for any one person and merely exists to discourage abusal of the system.
          </AccordionDetails>
        </Accordion>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
          Are Wi-Fi costs included in the price ?
          </AccordionSummary>
          <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
          What kind of SLA Guarantee do you provide ? 
          </AccordionSummary>
          <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </AccordionDetails>
        </Accordion>

        </Grid>

        <Grid item  sm={12} md sx={{ "@media (max-width: 768px)": {paddingTop:"0.7rem !important"}}}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
          Do you have 2 Bedroom suites ?
          </AccordionSummary>
          <AccordionDetails>
          Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch.
          This limit is enough for any one person and merely exists to discourage abusal of the system.
          </AccordionDetails>
        </Accordion>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
          Where can I reach you for support ?
          </AccordionSummary>
          <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
          Where are the servers located ?
          </AccordionSummary>
          <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </AccordionDetails>
        </Accordion>

        </Grid>

       </Grid>
      </Box>


      </Box>

    </Container>
    </Box>

    
    <Box className="FeatureBox" sx={{backgroundColor:"rgb(26 32 44)!important", "@media (max-width: 768px)": {paddingLeft:"5rem !important",paddingRight:"5rem !important"},
      "@media (max-width: 425px)": {paddingLeft:"1.5rem !important",paddingRight:"1.5rem !important"}}}>
      <Grid container>
        <Grid item xs={8} sm={4} md>
          <Typography variant="h6" sx={{fontSize:"0.8rem!important", fontWeight:"800 !important",color:"#fff"}}>SwiftServe Cloud</Typography>
          <Typography variant="body1" className="footerText">123 Road, New Startup Building Carter Road, San Francisco California 40234</Typography>
          
          <Box sx={{marginTop:"1rem", display:"flex"}}>
            <Box className="socialMediaIcon" sx={{marginRight:"1rem"}}>
              <a href="https://facebook.com/" > 
              <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png" className="facebook" alt="facebook"></img>
              </a>
              </Box>

              <Box className="socialMediaIcon" sx={{marginRight:"1rem"}}>
              <a href="https://twitter.com/" > 
              <img src="https://seeklogo.com/images/T/twitter-logo-1DEF94C339-seeklogo.com.png" className="facebook" alt="facebook"></img>
              </a>
              </Box>

              <Box className="socialMediaIcon" >
              <a href="https://youtube.com/" > 
              <img src="https://cdn-icons-png.flaticon.com/512/152/152810.png" className="facebook" alt="facebook"></img>
              </a>
              </Box>
          </Box>
        
        </Grid>

        <Grid item xs={4} sm={4} md>
        <Typography variant="h6" sx={{fontSize:"0.7rem!important", fontWeight:"600 !important",color:"#fff"}}>QUICK LINKS</Typography>
        <List disablePadding>
          <ListItem  className="footerLinks" >
            <a href="#blogs" className="footerText">Blog</a>
          </ListItem>

          <ListItem  className="footerLinks" >
            <a href="#blogs" className="footerText">FAQs</a>
          </ListItem>

          <ListItem  className="footerLinks" >
            <a href="#blogs" className="footerText">Support</a>
          </ListItem>

          <ListItem  className="footerLinks" >
            <a href="#blogs" className="footerText">About Us</a>
          </ListItem>
        </List>
       
        </Grid>

        <Grid item xs={4} sm={4} md sx={{"@media (max-width:425px)":{marginTop:"3rem"}}}>
        <Typography variant="h6" sx={{fontSize:"0.7rem!important", fontWeight:"600 !important",color:"#fff"}}>PRODUCT</Typography>
        <List disablePadding>
          <ListItem  className="footerLinks" >
            <a href="#blogs" className="footerText">Log In</a>
          </ListItem>

          <ListItem  className="footerLinks" >
            <a href="#blogs" className="footerText">Personal</a>
          </ListItem>

          <ListItem  className="footerLinks" >
            <a href="#blogs" className="footerText">Business</a>
          </ListItem>

          <ListItem  className="footerLinks" >
            <a href="#blogs" className="footerText">Team</a>
          </ListItem>
        </List>
       
        </Grid>

        <Grid item xs={4} sm={4} md sx={{"@media (max-width:768px)":{marginTop:"3rem"}}}>
        <Typography variant="h6" sx={{fontSize:"0.7rem!important", fontWeight:"600 !important",color:"#fff"}}>LEGAL</Typography>
        <List disablePadding>
          <ListItem  className="footerLinks" >
            <a href="#blogs" className="footerText">GDPR</a>
          </ListItem>

          <ListItem  className="footerLinks" >
            <a href="#blogs" className="footerText">Privacy Poilcy</a>
          </ListItem>

          <ListItem  className="footerLinks" >
            <a href="#blogs" className="footerText">Terms of Service</a>
          </ListItem>

          <ListItem  className="footerLinks" >
            <a href="#blogs" className="footerText">Disclaimer</a>
          </ListItem>
        </List>
       
        </Grid>

        
      <Grid item xs={4} sm={4} md sx={{"@media (max-width:768px)":{marginTop:"3rem"}}}>
      <Typography variant="h6" sx={{fontSize:"0.7rem!important", fontWeight:"600 !important",color:"#fff"}}>CONTACT</Typography>
        <List disablePadding>
          <ListItem  className="footerLinks" >
            <a href="#blogs" className="footerText">+1 (234) (567)-8901</a>
          </ListItem>

          <ListItem  className="footerLinks" >
            <a href="mailto:support@servana.com" className="footerText">support@servana.com</a>
          </ListItem>

          <ListItem  className="footerLinks" >
            <a href="#blogs" className="footerText">Sales</a>
          </ListItem>

          <ListItem  className="footerLinks" >
            <a href="#blogs" className="footerText">Report Abuse</a>
          </ListItem>
        </List>

      </Grid>

      </Grid>

      <Divider sx={{borderColor:"rgb(45 55 72)", marginTop:"2rem", marginBottom:"2rem"}} />

      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1" sx={{minWidth:"20rem", "@media(max-width:425px)": {minWidth:"12rem"}}} className="footerText"> © Copyright 2023, SwiftService Cloud Inc.</Typography>
        <Typography variant="body1"  className="footerText"> An Internet Company.</Typography>
      </Box>
    </Box>
  </>

  );
}


